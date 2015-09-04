import React from 'react';

const Header = React.createClass({

  propTypes: {
    username: React.PropTypes.string.isRequired,
    todoNumber: React.PropTypes.number.isRequired
  },

  render() {
    const { username, todoNumber } = this.props;

    return (
      <header>
        <h1>todos</h1>
        <p>哈囉，{username}：您今天有 {todoNumber} 條代辦事項！</p>
      </header>
    );
  }
});

module.exports = Header;