import React from 'react';
import Input from './Input';
import TodoActions from '../actions/TodoActions';

const AddTodoInput = React.createClass({
  render() {
    return (
      <Input placeholder="新增代辦事項 :(" onEnter={TodoActions.create} />
    );
  }
});

module.exports = AddTodoInput;
