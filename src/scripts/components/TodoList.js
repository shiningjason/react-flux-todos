import React from 'react';
import TodoItem from './TodoItem';

const TodoList = React.createClass({

  propTypes: {
    todos: React.PropTypes.array.isRequired
  },

  render() {
    const { todos } = this.props;
    const todoItems = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem content={todo.content} completed={todo.completed} />
      </li>
    ));

    return (
      <ul style={styles.todoList}>
        {todoItems}
      </ul>
    );
  }
});

const styles = {
  todoList: {
    listStyle: 'none'
  }
};

module.exports = TodoList;
