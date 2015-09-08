import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = React.createClass({

  render() {
    return (
      <Header username="Jason" todoNumber={this.props.todoNumber} />
    );
  }
});

module.exports = connect(
  (state) => ({ todoNumber: state.todos.length })
)(HeaderContainer);
