import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Spinner extends React.Component {
  render() {
    return (
      <div className={`spinner ${this.props.classes}`}>
        Загрузка...
      </div>
    );
  };
};

Spinner.defaultProps = {
  classes: '',
};

Spinner.propTypes = {
  classes: PropTypes.string
};