import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.tasks = null;
  }
  componentWillMount() {
    if(!!this.props.tasks && this.props.tasks.length > 0) {
      this.tasks = this.props.tasks.map(this.createTask);
    }
  }
  createTaks(task, index) {
    const block =
      <Task
        description={task.description}
        id={task.id}
        done={task.done}
      />
    return block;
  }
  render() {
    const block = <ul className="tasks__list">{this.tasks}</ul>;
    return block;
  }
}

export default TasksList;
