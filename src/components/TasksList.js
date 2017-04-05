import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.createTaks = this.createTaks.bind(this);
  }

  createTaks(task, index) {
    const block =
      <Task
        actions={this.props.actions}
        task={task}
        key={task.id}
      />
    return block;
  }
  render() {
    var listTasks = null;

    if(!!this.props.selectedCategory) {
      listTasks = this.props.selectedCategory.tasks.map(this.createTaks)
    };

    const block = <ul className="tasks__list">{listTasks}</ul>;
    return block;
  }
}

export default TasksList;
