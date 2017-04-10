import React, {Component} from 'react';
import Task from '../Task/Task';
import './TasksList.css';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.createTaks = this.createTaks.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  createTaks(task, index) {
    const block = <Task
      actions={this.props.actions}
      task={task}
      key={task.id}
    />

    return block;
  }

  // getFilteredTasks() {
  //   if (!!this.props.selectedCategory) {
  //     const tasks = this.props.selectedCategory.tasks;
  //
  //     if (!!this.props.query) {
  //       // console.log('Has query');
  //
  //       const re = new RegExp(this.props.query, "i");
  //       const matchQuery = (task) => task
  //         .description
  //         .match(re);
  //
  //       return tasks.filter(matchQuery);
  //     } else {
  //       return tasks;
  //     }
  //   } else {
  //     return [];
  //   }
  // }

  render() {
    // console.log('Rendering... ', 'TasksList');

    var listTasks = this.props.tasks.map(this.createTaks);
      // .getFilteredTasks()

    const block = <ul className="tasks__list">{listTasks}</ul>;

    return block;
  }
}

export default TasksList;
