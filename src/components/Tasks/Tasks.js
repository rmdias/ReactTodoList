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
    this.getSelectedCategoryTasks = this.getSelectedCategoryTasks.bind(this);
    this.getNextTaskId = this.getNextTaskId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTypeNewTask = this.onTypeNewTask.bind(this);
    this.setTask = this.setTask.bind(this);
    this.unsetTask = this.unsetTask.bind(this);

    this.state = {
      newTaskDescription: ""
    };

    this.actions = {
      getSelectedCategoryTasks: this.getSelectedCategoryTasks,
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
      id: this.getNextTaskId(),
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
  getNextTaskId() {
    return this.props.actions.getNextId('tasks');
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
    event.preventDefault();
    this.createNewTask(this.state.newTaskDescription);
    this.setState({newTaskDescription: ""});
  }

  /**
  * Auxiliary methods
  **/

  getSelectedCategoryTasks() {
    const category = this.props.selectedCategory;

    if(!!category) {
      return this.props.actions.get('tasks', ['cat', category.id]);
    } else {
      return [];
    }
  }

  render() {
    const tasks = this.getSelectedCategoryTasks();
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
            value={this.state.newTaskDescription}
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
