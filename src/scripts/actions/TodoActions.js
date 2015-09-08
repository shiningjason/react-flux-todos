import TodoConstants from '../constants/TodoConstants';

const TodoActions = {
  create(content) {
    return {
      type: TodoConstants.CREATE,
      content
    };
  },

  toggle(id) {
    return {
      type: TodoConstants.TOGGLE,
      id
    };
  },

  update(id, content) {
    return {
      type: TodoConstants.UPDATE,
      id,
      content
    };
  },

  delete(id) {
    return {
      type: TodoConstants.DELETE,
      id
    };
  }
};

module.exports = TodoActions;
