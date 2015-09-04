import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

const DEFAULT_TODOS = [
  {
    id: 1,
    content: '準備 React & Flux 教育訓練',
    completed: false
  },
  {
    id: 2,
    content: '繳電話費',
    completed: false
  },
  {
    id: 3,
    content: '繳房租',
    completed: false
  },
  {
    id: 4,
    content: '週會會議記錄',
    completed: true
  }
];

const App = React.createClass({

  getInitialState() {
    return {
      todos: DEFAULT_TODOS
    }
  },

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Header username="Jason" todoNumber={todos.length} />
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = App;
