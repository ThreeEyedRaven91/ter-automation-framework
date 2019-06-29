import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Input from './input';
import Dropdown from './dropdown';
import DatePicker from './datepicker';
import Checkbox from './checkbox';

const InputCollection = {
  Input,
  Dropdown,
  DatePicker,
  Checkbox,
};

class Form extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => ({
      ...prev,
      value: {
        ...prev.value,
        ...nextProps.value,
      },
    }));
  }

  onChange(key, value) {
    if (key) {
      this.setState(prev => ({
        value: {
          ...prev.value,
          [key]: value,
        },
      }));

      const { onChange, parent, stateKey } = this.props;
      if (onChange) {
        onChange({ key, value });
      }
      if (parent) {
        if (stateKey) {
          parent.setState(prevState => ({
            ...prevState,
            [stateKey]: {
              ...prevState[stateKey],
              [key]: value,
            }
          }))
        } else {
          parent.setState({
            [key]: value,
          });
        }
      }
    }
  }

  render() {
    const { template: { elements }, validationResult, forceValidate } = this.props;
    const { value } = this.state;

    return (
      <form onSubmit={(e) => { e.preventDefault(); console.log('test'); }}>
        <Row>
          {elements.map((element) => {
            let InputComponent = null;

            switch (element.type) {
              case 'select': InputComponent = InputCollection.Dropdown; break;
              case 'datepicker': InputComponent = InputCollection.DatePicker; break;
              case 'checkbox': InputComponent = InputCollection.Checkbox; break;
              default: InputComponent = InputCollection.Input; break;
            }

            return (
              <Col xs={element.col || 12}>
                <InputComponent
                  {...element}
                  key={element.input_key}
                  value={value[element.input_key]}
                  formValue={value}
                  onChange={text => this.onChange(element.input_key, text)}

                  validationResult={validationResult}
                  forceValidate={forceValidate}
                />
              </Col>
            );
          })}
        </Row>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  template: PropTypes.object,
  validationResult: PropTypes.object,
  forceValidate: PropTypes.object,
};

Form.defaultProps = {
  onChange: null,
  value: null,
  template: null,
  validationResult: null,
  forceValidate: false,
};
