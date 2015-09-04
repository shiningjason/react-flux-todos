import React from 'react';

const ENTER_KEY = 13;

const Input = React.createClass({

  propTypes: {
    placeholder: React.PropTypes.string,
    onEnter: React.PropTypes.func
  },

  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.handleEnter(event)
        break;
    }
  },

  handleEnter(event) {
    event.preventDefault();

    const { onEnter } = this.props;
    onEnter && onEnter(this.state.value);

    this.setState({
      value: ''
    });
  },

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;

    return (
      <input type="text"
             value={value}
             placeholder={placeholder}
             onChange={this.handleChange}
             onKeyDown={this.handleKeyDown} />
    );
  }
});

module.exports = Input;
