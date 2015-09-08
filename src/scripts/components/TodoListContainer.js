import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo, updateTodo, deleteTodo } from '../actions/TodoActions';

@connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => bindActionCreators({ toggleTodo, updateTodo, deleteTodo }, dispatch)
)
export default class TodoListContainer extends React.Component {
  render() {
    const { todos, toggleTodo, updateTodo, deleteTodo } = this.props;
    return (
      <TodoList 
        todos={todos}
        onToggle={toggleTodo}
        onChange={updateTodo}
        onDelete={deleteTodo} />
    );
  }
}
