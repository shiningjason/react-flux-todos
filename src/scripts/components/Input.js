import React from 'react';

const ENTER_KEY = 13;

const Input = React.createClass({

  propTypes: {
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onEnter: React.PropTypes.func
  },

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.handleEnter(event);
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
    const { onKeyDown, ...rest } = this.props;
    const { value } = this.state || {};

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
        onKeyDown={(event) => {
          this.handleKeyDown(event);
          onKeyDown && onKeyDown(event);
        }}
        {...rest} />
    );
  }
});

module.exports = Input;
