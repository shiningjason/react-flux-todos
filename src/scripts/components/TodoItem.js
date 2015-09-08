import React from 'react';
import Input from './Input';

const ESCAPE_KEY = 27;

const TodoItem = React.createClass({

  propTypes: {
    content: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return { editable: false };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (!prevState.editable && this.state.editable) {
      const node = React.findDOMNode(this.refs.editField);
      node.focus();
    }
  },

  toggleEditable() {
    this.setState({ editable: !this.state.editable });
  },

  render() {
    const { content, completed, onToggle, onChange, onDelete } = this.props;
    const { editable } = this.state;

    if (!editable) {
      return (
        <div style={styles.container}>
          <input
            type="checkbox"
            style={styles.checkbox}
            checked={completed}
            onChange={onToggle} />

          <label
            style={styles.content}
            onDoubleClick={this.toggleEditable}>{content}</label>

          <button
            style={styles.deleteBtn}
            onClick={onDelete}>x</button>
        </div>
      );

    } else {
      return (
        <Input
          ref="editField"
          style={styles.input}
          defaultValue={content}
          onEnter={(content) => {
            if (content !== '') onChange(content);
            this.toggleEditable();
          }}
          onBlur={(event) => {
            const content = event.target.value;
            if (content !== '') onChange(content);
            this.toggleEditable();
          }}
          onKeyDown={(event) => {
            if (event.keyCode === ESCAPE_KEY) {
              event.preventDefault();
              this.toggleEditable();
            }
          }} />
      );
    }
  }
});

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 0',
    fontSize: '24px',
    lineHeight: '1.4em',
  },
  checkbox: {
    width: '40px'
  },
  content: {
    flex: 1
  },
  deleteBtn: {},
  input: {
    width: '100%',
    paddingLeft: '40px'
  }
};

module.exports = TodoItem;
