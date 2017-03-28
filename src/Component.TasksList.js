import React, { Component } from 'react';
import Task from './Component.Task';

class TasksList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <ul className="tasksList">
        <Task />
      </ul>;
    return block;
  }
}

export default TasksList;
