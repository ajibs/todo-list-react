import React from 'react';

const pStyle = {
  borderBottom: '1px dashed #2c3e50',
  paddingBottom: '20px'
};


class ToDoDisplay extends React.Component {
  render() {
    const taskList = this.props.task.map((item) => {
      return (
      <p style={pStyle}>
        <input type="checkbox" /> {item}
      </p>
      )
    });

    return (
      <div>
        {taskList}
      </div>
    );
  }
}

export default ToDoDisplay;