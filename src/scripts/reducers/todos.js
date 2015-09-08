import update from 'react/lib/update';
import TodoConstants from '../constants/TodoConstants';

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

const _addTodo = (todos, content) => {
  return update(todos, {
    $push: [{
      id: todos.length + 1,
      content,
      completed: false
    }]
  });
};

const _toggleTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  return update(todos, {
    [idx]: {
      completed: { $set: !todos[idx].completed }
    }
  });
};

const _editTodo = (todos, id, content) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  return update(todos, {
    [idx]: {
      content: { $set: content }
    }
  });
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  return update(todos, {
    $splice: [[idx, 1]]
  })
};

const reducer = (state = DEFAULT_TODOS, action) => {
  switch (action.type) {
    case TodoConstants.CREATE:
      return _addTodo(state, action.content);

    case TodoConstants.TOGGLE:
      return _toggleTodo(state, action.id);

    case TodoConstants.UPDATE:
      return _editTodo(state, action.id, action.content);

    case TodoConstants.DELETE:
      return _deleteTodo(state, action.id);

    default:
      return state;
  }
};

module.exports = reducer;
