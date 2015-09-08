import React from 'react';

const ENTER_KEY = 13;

const Input = React.createClass({

  propTypes: {
    onEnter: React.PropTypes.func
  },

  getInitialState() {
    return { value: this.props.defaultValue || '' };
  },

  handleChange(event) {
    this.setState({ value: event.target.value });
  },

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.handleEnter(event);
        break;
    }

    const { onKeyDown } = this.props;
    onKeyDown && onKeyDown(event);
  },

  handleEnter(event) {
    event.preventDefault();

    const { onEnter } = this.props;
    onEnter && onEnter(this.state.value);

    this.setState({ value: '' });
  },

  render() {
    return (
      <input
        {...this.props}
        type="text"
        style={{ ...styles.input, ...this.props.style }}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown} />
    );
  }
});

const styles = {
  input: {
    border: '1px solid #999',
    padding: '6px',
    fontSize: '24px',
    lineHeight: '1.4em'
  }
};

module.exports = Input;
