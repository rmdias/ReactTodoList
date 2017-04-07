import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.createTaks = this.createTaks.bind(this);
  }

  shouldComponentUpdate() {
    return true;
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

  getFilteredTasks() {
    if(!!this.props.selectedCategory) {
      const tasks = this.props.selectedCategory.tasks;

      if(!!this.props.query) {
        console.log('Has query');

        const re = new RegExp(this.props.query, "i");
        const matchQuery = (task) => task.description.match(re);

        return tasks.filter(matchQuery);
      } else {
        console.log('Has no query');
        return tasks;
      }
    } else {
      console.log('No selected category');
      return [];
    }
  }

  render() {
  // console.log('Rendering... ', 'TasksList');

    var listTasks =  this.getFilteredTasks().map(this.createTaks);

    const block = <ul className="tasks__list">{listTasks}</ul>;
    return block;
  }
}

export default TasksList;
