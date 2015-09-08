import TodoConstants from '../constants/TodoConstants';

export const createTodo = (content) => ({
  type: TodoConstants.CREATE,
  content
});

export const toggleTodo = (id) => ({
  type: TodoConstants.TOGGLE,
  id
});

export const updateTodo = (id, content) => ({
  type: TodoConstants.UPDATE,
  id,
  content
});

export const deleteTodo = (id) => ({
  type: TodoConstants.DELETE,
  id
});
