import React from 'react';

const pStyle = {
  borderBottom: '1px dashed #2c3e50',
  paddingBottom: '20px'
};


class ToDoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const chosenTask = e.target.value;
    this.props.deleteTask(chosenTask);
  }

  render() {
    const taskList = this.props.task.map((item, i) => {
      return (
      <p style={pStyle} key={`key-${i}`}>
        <input type="checkbox" value={item} onClick={this.handleClick} />
        {item}
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