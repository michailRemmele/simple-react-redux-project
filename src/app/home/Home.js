import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getItemList, addNewValue } from './actions';

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';
import List from '../../components/list/List';
import Spinner from '../../components/spinner/Spinner';

import './style.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };

  componentDidMount() {
    this.props.getItemList();
  }

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
    const { itemList, itemListPending } = this.props;

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
        <List classes='home__list' itemList={itemList}/>
        {itemListPending ? <Spinner classes='home__spinner' /> : null}
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    itemList: state.homeReducer.itemList,
    itemListPending: state.homeReducer.itemListPending
  }
};

const mapDispatchToProps = (dispatch) => ({
  getItemList: bindActionCreators(getItemList, dispatch),
  addNewValue: bindActionCreators(addNewValue, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
