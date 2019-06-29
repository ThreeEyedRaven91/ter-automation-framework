import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
} from 'reactstrap';
import BaseInput from './base_input';

class FInput extends BaseInput {
  constructor(props, context) {
    super(props, context);
    this.state = {
      edited: false,
    };
  }

  onChangeText(text) {
    const { onChange } = this.props;
    this.setState({ edited: true });

    if (onChange) {
      if (text.trim().length === 0) {
        onChange(null);
      } else {
        onChange(text);
      }
    }
  }

  renderControl() {
    return (
      <Input
        className="form-control"
        {...this.props}
        onChange={event => this.onChangeText(event.nativeEvent.target.value)}
      />
    )
  }
}

export default FInput;
FInput.propTypes = {
  t: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string,
  left_col: PropTypes.number,
  right_col: PropTypes.number,
  input_key: PropTypes.string,
  validationResult: PropTypes.object,
  forceValidate: PropTypes.bool,
  title_right: PropTypes.string.isRequired,
  input_log: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
};

FInput.defaultProps = {
  t: null,
  onChange: null,
  type: null,
  title: null,
  left_col: 4,
  right_col: 8,
  input_key: null,
  validationResult: null,
  forceValidate: false,
  vertical: false,
};
