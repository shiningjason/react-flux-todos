import React from 'react';
import HeaderContainer from './HeaderContainer';
import AddTodoInput from './AddTodoInput';
import TodoListContainer from './TodoListContainer';

const App = React.createClass({

  render() {
    return (
      <div style={styles.container}>
        <HeaderContainer />
        <AddTodoInput />
        <TodoListContainer />
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
