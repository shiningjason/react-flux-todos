import React from 'react';

const TodoItem = React.createClass({

  render() {
    const { content, completed } = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed} />
        <label>{content}</label>
      </div>
    );
  }
});

module.exports = TodoItem;
