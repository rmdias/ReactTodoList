import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  createTaks(task, index) {
    const block =
      <Task
        description={task.description}
        key={task.id}
        id={task.id}
        done={task.done}
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
