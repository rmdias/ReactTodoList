import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <ul className="tasks__list">
        <Task />
      </ul>;
    return block;
  }
}

export default TasksList;
