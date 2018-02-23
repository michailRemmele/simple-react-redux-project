import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class List extends React.Component {
  render() {
    const { classes, itemList } = this.props;

    const items = itemList.map(item => {
      return (
        <li key={item.id} className='list__item'>
          {item.id}. {item.value}
        </li>
      );
    });

    return (
      <ul className={`list ${classes}`}>
        {items}
      </ul>
    );
  }
}

List.defaultProps = {
  classes: '',
  itemList: []
};

List.propTypes = {
  classes: PropTypes.string,
  itemList: PropTypes.array
};