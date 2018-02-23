import React from 'react';
import PropTypes from 'prop-types';

import Header from './blocks/header/Header';
import Footer from './blocks/footer/Footer';

import './style.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className='content'>
          {this.props.children}
        </main>
        <Footer />
      </React.Fragment>
    );
  };
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};