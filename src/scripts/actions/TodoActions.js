import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const TodoActions = {
  create(content) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.CREATE,
      content: content
    });
  },

  toggle(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TOGGLE,
      id: id
    });
  },

  update(id, content) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.UPDATE,
      id: id,
      content: content
    });
  },

  delete(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.DELETE,
      id: id
    });
  }
};

module.exports = TodoActions;
