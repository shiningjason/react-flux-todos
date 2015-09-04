import React from 'react';
import TodoItem from './TodoItem';

const TodoList = React.createClass({

  propTypes: {
    todos: React.PropTypes.array.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },

  render() {
    const { todos, onToggle, onChange, onDelete } = this.props;

    const todoItems = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          content={todo.content}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onChange={(content) => onChange(todo.id, content)}
          onDelete={() => onDelete(todo.id)} />
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
