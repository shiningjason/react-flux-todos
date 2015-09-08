import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './Input';
import TodoActions from '../actions/TodoActions';

const AddTodoInput = React.createClass({
  render() {
    return (
      <Input placeholder="新增代辦事項 :(" onEnter={this.props.createTodo} />
    );
  }
});

module.exports = connect(
  undefined,
  (dispatch) => ({ createTodo: bindActionCreators(TodoActions.create, dispatch) })
)(AddTodoInput);
