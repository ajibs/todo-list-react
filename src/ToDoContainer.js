import React from 'react';
import { ToDoInput } from './ToDoInput';
import ToDoDisplay from './ToDoDisplay';


const wrapperStyle = {
  margin: '8% auto',
  width: '300px',
};



class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allTasks: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleSubmit(newTask) {
    const allTasks = this.state.allTasks;
    allTasks.push(newTask);
    this.setState({
      allTasks
    });
  }

  deleteTask(task) {
    const allTasks = this.state.allTasks;
    const modifiedTasks = allTasks.filter( item => item !== task)
    this.setState({
      allTasks: modifiedTasks
    });
  }

  render() {

    return (
      <div style={wrapperStyle}>
        <ToDoInput onSubmit={this.handleSubmit}/>
        <ToDoDisplay task={this.state.allTasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default ToDoContainer;