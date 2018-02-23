import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewValue } from './actions';

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';
import List from '../../components/list/List';

import './style.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewValue(this.state.value);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <React.Fragment>
        <form
          className='form'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <FormField classes='form__form-field' value={this.state.value} placeholder='Какое-то значение' />
          <Button
            classes='form__button'
            type='submit'
            value='Добавить'
            disabled={this.state.value.length === 0}
          />
        </form>
        <List classes='home__list' itemList={this.props.itemList}/>
      </React.Fragment>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    itemList: state.homeReducer.itemList,
  }
};

const mapDispatchToProps = (dispatch) => ({
  addNewValue: bindActionCreators(addNewValue, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
