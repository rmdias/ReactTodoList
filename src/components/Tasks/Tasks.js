import _ from 'lodash';
import React, {PureComponent} from 'react';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import TasksList from '../TasksList/TasksList';
import './Tasks.css';

class Tasks extends PureComponent {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.getCategoryTasks = this.getCategoryTasks.bind(this);
    this.nextTaskId = this.nextTaskId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTypeNewTask = this.onTypeNewTask.bind(this);
    this.setTask = this.setTask.bind(this);
    this.unsetTask = this.unsetTask.bind(this);

    this.state = {
      newTaskDescription: ""
    };

    this.actions = {
      getCategoryTasks: this.getCategoryTasks,
      addTask: this.addTask,
      setTask: this.setTask,
      unsetTask: this.unsetTask,
      ...this.props.actions
    }
  }

  /**
  * Component actions
  **/

  createNewTask(description) {
    var newTask = {
      id: this.nextTaskId(),
      done: false,
      cat: this.props.selectedCategory.id,
      description: description
    }

    this.addTask(newTask);
  }

  /**
  * Collection Management
  **/

  // Adds a new task to collection
  addTask(task) {
    this.props.actions.add('tasks', task);
  }

  // Updates one task
  setTask(task) {
    this.props.actions.set('tasks', task);
  }

  // Get the next id base on the max number found
  // PLUS one
  nextTaskId() {
    return this.props.actions.nextId('tasks');
  }

  // Removes the task from collection
  unsetTask(task) {
    this.props.actions.unset('tasks', task);
  }

  /**
  * Event Handlers
  **/

  onTypeNewTask(event) {
    const newTaskDescription = event.target.value
    this.setState({newTaskDescription: newTaskDescription});
  }

  onSubmit(event) {
    this.createNewTask(this.state.newTaskDescription);
  }

  /**
  * Auxiliary methods
  **/

  getCategoryTasks() {
    const category = this.props.selectedCategory;

    if(!!category) {
      const tasks = _.filter(this.props.tasks, { cat: category.id });
      return tasks;
    } else {
      return [];
    }
  }

  render() {
    const tasks = this.getCategoryTasks();
    const block = <section className="tasks">
      <header className="tasks__header">
        <h2 className="tasks__title">Tasks</h2>
        <form onSubmit={this.onSubmit} action="" className="tasks__create-form">
          <h3 className="tasks__sub-title">Create Task</h3>

          <FormInput
            block="tasks"
            element="create-input"
            onChange={this.onTypeNewTask}
            disabled={!this.props.selectedCategory}
            label="Add a new task"
          />

          <FormButton
            action="submit"
            block="tasks"
            element="create-submit"
            label="Add"
          />

        </form>
      </header>
      <div className="tasks__content">
        <h3 className="tasks__title">Categories List</h3>
        <TasksList
          actions={this.actions}
          selectedCategory={this.props.selectedCategory}
          query={this.props.query}
          tasks={tasks}
        />
      </div>
    </section>;

    return block;
  }
}

export default Tasks;
