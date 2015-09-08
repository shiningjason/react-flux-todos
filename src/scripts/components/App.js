import React from 'react';
import HeaderContainer from './HeaderContainer';
import AddTodoInput from './AddTodoInput';
import TodoListContainer from './TodoListContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <HeaderContainer />
        <AddTodoInput />
        <TodoListContainer />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '550px',
    margin: '0 auto'
  },
};
