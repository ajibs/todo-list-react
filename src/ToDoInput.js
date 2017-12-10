import React from 'react';

const inputStyle = {
  border: '5px solid #2c3e50',
  borderRadius: '10px',
  width: '280px',
  padding: '10px'
};

export class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.callHandler = this.callHandler.bind(this);
  }

  callHandler(e) {
    e.preventDefault();
    const newTask = this.taskInput.value;
    this.props.onSubmit(newTask);
    this.inputForm.reset();
  }

  render() {
    return (
      <form ref={(input) => { this.inputForm = input }} onSubmit={this.callHandler}>
        <input
        style={inputStyle}
        type="text"
        placeholder="enter a new task" ref={(input) => { this.taskInput = input }}
        required />
      </form>
    );
  }
};