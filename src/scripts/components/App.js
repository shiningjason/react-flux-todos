import React from 'react';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

const App = React.createClass({

  getInitialState() {
    return { todos: TodoStore.getAll() };
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ todos: TodoStore.getAll() });
  },

  render() {
    const { todos } = this.state;

    return (
      <div style={styles.container}>
        <Header username="Jason" todoNumber={todos.length} />
        <Input placeholder="新增代辦事項 :(" onEnter={TodoActions.create} />
        <TodoList todos={todos}
          onToggle={TodoActions.toggle}
          onChange={TodoActions.update}
          onDelete={TodoActions.delete} />
      </div>
    );
  }
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '550px',
    margin: '0 auto'
  },
};

module.exports = App;
