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
    return {
      editable: false
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (!prevState.editable && this.state.editable) {
      const node = React.findDOMNode(this.refs.editField);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  },

  toggleEditable() {
    this.setState({
      editable: !this.state.editable
    });
  },

  render() {
    const { content, completed, onToggle, onChange, onDelete } = this.props;
    const { editable } = this.state;

    if (!editable) {
      return (
        <div>
          <input type="checkbox" checked={completed} onChange={onToggle} />
          <label onDoubleClick={this.toggleEditable}>{content}</label>
          <button onClick={onDelete}>x</button>
        </div>
      );

    } else {
      return (
        <Input
          ref="editField"
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

module.exports = TodoItem;
