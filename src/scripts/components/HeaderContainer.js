import React from 'react';
import Header from './Header';
import TodoStore from '../stores/TodoStore';

const getTodoNumberState = () => ({
  todoNumber: TodoStore.getAll().length
});

const HeaderContainer = React.createClass({

  getInitialState() {
    return getTodoNumberState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getTodoNumberState());
  },

  render() {
    return (
      <Header username="Jason" todoNumber={this.state.todoNumber} />
    );
  }
});

module.exports = HeaderContainer;
