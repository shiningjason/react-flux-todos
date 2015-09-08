import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './Input';
import { createTodo } from '../actions/TodoActions';

@connect(
  undefined,
  (dispatch) => bindActionCreators({ createTodo }, dispatch)
)
export default class AddTodoInput extends React.Component {
  render() {
    return (
      <Input placeholder="新增代辦事項 :(" onEnter={this.props.createTodo} />
    );
  }
}
