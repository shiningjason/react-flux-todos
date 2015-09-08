import React from 'react';

export default class Header extends React.Component {

  static propTypes = {
    username: React.PropTypes.string.isRequired,
    todoNumber: React.PropTypes.number.isRequired
  };

  render() {
    const { username, todoNumber } = this.props;

    return (
      <header>
        <h1>todos</h1>
        <p>哈囉，{username}：您今天有 {todoNumber} 條代辦事項！</p>
      </header>
    );
  }
}
