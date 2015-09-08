import React from 'react';
import TodoList from './TodoList';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

const getTodoState = () => ({
  todos: TodoStore.getAll()
});

const TodoListContainer = React.createClass({

  getInitialState() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getTodoState());
  },

  render() {
    return (
      <TodoList 
        todos={this.state.todos}
        onToggle={TodoActions.toggle}
        onChange={TodoActions.update}
        onDelete={TodoActions.delete} />
    );
  }
});

module.exports = TodoListContainer;
