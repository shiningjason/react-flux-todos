import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';

@connect((state) => ({ todoNumber: state.todos.length }))
export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Header username="Jason" todoNumber={this.props.todoNumber} />
    );
  }
}
