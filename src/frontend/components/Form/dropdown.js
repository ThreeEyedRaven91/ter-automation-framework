import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import BaseInput from './base_input';

const customStyles = {
  control: base => ({
    ...base,
    borderColor: '#E3E7EA',
  }),
};

class Dropdown extends BaseInput {
  constructor(props, context) {
    super(props, context);
    const { mapPropsToState } = props;

    this.state = {
      selectedValue: undefined,
      options: props.options || [],
      params: mapPropsToState ? mapPropsToState(props) : undefined,
      optionsCategory: [],
    };
  }

  async componentDidMount() {
    const { request, formValue, ...props } = this.props;
    if (request) {
      const result = await request({
        ...props,
        formValue,
      });
      this.setState(prev => ({
        ...prev,
        options: result,
      }));
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { mapPropsToState, request } = nextProps;
    const { params } = this.state;

    if (mapPropsToState && request) {
      const nextParams = mapPropsToState(nextProps);

      if (nextParams !== params) {
        const result = await request(nextProps);
        this.setState(prev => ({
          ...prev,
          options: result,
          params: nextParams,
        }));
      }
    }
  }


  onChangeText(options) {
    const { onChange } = this.props;

    if (onChange) {
      if (options.value) {
        onChange(options.value);

        this.setState({
          selectedValue: options.value,
        });
      } else {
        onChange(options.map(option => option.value));

        this.setState({
          selectedValue: options.map(option => option.value),
        });
      }
    }
  }

  renderControl() {
    const {
      isMulti,
      ...props
    } = this.props;
    const { value } = this.props;
    const {
      options,
    } = this.state;

    const selectedValue = isMulti
      ? options.filter(item => value.some(i => i === item.value))
      : options.find(item => item.value === value);

    return (
      <Select
        {...props}
        styles={customStyles}
        options={options}
        onChange={selectedOption => this.onChangeText(selectedOption)}
        value={selectedValue}
        isMulti={isMulti}
      />
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string,
  leftCol: PropTypes.number,
  rightCol: PropTypes.number,
  request: PropTypes.func,
  mapPropsToState: PropTypes.func,
  onChange: PropTypes.func,
  formValue: PropTypes.object,
  input_key: PropTypes.string.isRequired,
  value: PropTypes.string,
  isMulti: PropTypes.bool,
};

Dropdown.defaultProps = {
  title: '',
  leftCol: 4,
  rightCol: 8,
  request: false,
  mapPropsToState: null,
  onChange: null,
  formValue: null,
  value: null,
  isMulti: false,
};
