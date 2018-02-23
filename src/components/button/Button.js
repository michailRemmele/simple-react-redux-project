import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Button extends React.Component {
  render() {
    const { value, classes, type, disabled } = this.props;

    return (
      <button className={`button ${classes}`} type={type} disabled={disabled}>
        {value}
      </button>
    );
  };
};

Button.defaultProps = {
  value: '',
  classes: '',
  type: 'button',
  disabled: false
};

Button.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};