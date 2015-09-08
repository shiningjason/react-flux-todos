import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoActions from '../actions/TodoActions';

const TodoListContainer = React.createClass({

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
});

module.exports = connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => ({
    toggleTodo: bindActionCreators(TodoActions.toggle, dispatch),
    updateTodo: bindActionCreators(TodoActions.update, dispatch),
    deleteTodo: bindActionCreators(TodoActions.delete, dispatch)
  })
)(TodoListContainer);;
