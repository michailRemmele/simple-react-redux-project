import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class FormField extends React.Component {
  render() {
    const { classes, value, type, name, placeholder } = this.props;

    return (
      <input
        className={`form-field ${classes}`}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
  };
};

FormField.defaultProps = {
  value: '',
  classes: '',
  type: 'text',
  name: '',
  placeholder: ''
};

FormField.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};