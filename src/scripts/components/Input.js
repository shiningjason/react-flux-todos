import React from 'react';

const ENTER_KEY = 13;

export default class Input extends React.Component {

  static propTypes = {
    onEnter: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.defaultValue || ''
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.handleEnter(event);
        break;
    }

    const { onKeyDown } = this.props;
    onKeyDown && onKeyDown(event);
  }

  handleEnter(event) {
    event.preventDefault();

    const { onEnter } = this.props;
    onEnter && onEnter(this.state.value);

    this.setState({ value: '' });
  }

  render() {
    return (
      <input
        {...this.props}
        type="text"
        style={{ ...styles.input, ...this.props.style }}
        value={this.state.value}
        onChange={::this.handleChange}
        onKeyDown={::this.handleKeyDown} />
    );
  }
}

const styles = {
  input: {
    border: '1px solid #999',
    padding: '6px',
    fontSize: '24px',
    lineHeight: '1.4em'
  }
};
