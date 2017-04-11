import _ from 'lodash';
import React, {Component} from 'react';
import Task from '../Task/Task';
import './TasksList.css';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.createTaks = this.createTaks.bind(this);
    this.tasks = this.tasks.bind(this);
    this.filterTasksBySearch = this.filterTasksBySearch.bind(this);
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

  tasks() {
    const tasks = this.props.tasks;
    const hasTasks = !!tasks.length;
    const hasQuery = !!this.props.query;
    const canFilter = hasTasks && hasQuery;
    const lister = canFilter ? this.filterTasksBySearch : _.identity;

    return lister(tasks);
  }

  filterTasksBySearch(taskList) {
    const re = new RegExp(this.props.query, "i");
    const matchQuery = (task) => task.description.match(re);
    return _.filter(taskList, matchQuery);
  }

  render() {
    const tasksList = this.tasks().map(this.createTaks);
    const block = <ul className="tasks__list">{tasksList}</ul>;
    return block;
  }
}

export default TasksList;
