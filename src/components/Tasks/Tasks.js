import _ from 'lodash';
import React, {PureComponent} from 'react';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import TasksList from '../TasksList/TasksList';
import './Tasks.css';

class Tasks extends PureComponent {
  constructor(props) {
    super(props);

    this.getCategoryTasks = this.getCategoryTasks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTypeNewTask = this.onTypeNewTask.bind(this);
    this.setTask = this.setTask.bind(this);
    this.unsetTask = this.unsetTask.bind(this);
    this.nextTaskId = this.nextTaskId.bind(this);

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


  addTask(task) {
    // console.log('Set task', task, this.props.actions);
    this.props.actions.add('tasks', task);
  }

  setTask(task) {
    // console.log('Set task', task, this.props.actions);
    this.props.actions.set('tasks', task);
  }

  unsetTask(task) {
    this.props.actions.unset('tasks', task);
  }

  nextTaskId() {
    return this.props.actions.nextId('tasks');
  }

  onTypeNewTask(event) {
    const newTaskDescription = event.target.value
    this.setState({newTaskDescription: newTaskDescription});
    // console.log('newTaskDescription', newTaskDescription);
  }

  handleSubmit(event) {
    this.createNewTask(this.state.newTaskDescription);
  }

  createNewTask(description) {
    // console.log('Creating new category: ', description, this.props.selectedCategory);
    console.log(`Task ${description} was created`);

    var newTask = {
      id: this.nextTaskId(),
      done: false,
      cat: this.props.selectedCategory.id,
      description: description
    }
    
    this.addTask(newTask);
  }

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
    // console.log('Rendering... ', 'Tasks', this.props.actions);
    const tasks = this.getCategoryTasks();
    const block = <section className="tasks">
      <header className="tasks__header">
        <h2 className="tasks__title">Tasks</h2>
        <form onSubmit={this.handleSubmit} action="" className="tasks__create-form">
          <h3 className="tasks__sub-title">Create Task</h3>

          <FormInput
            block="tasks"
            element="create-input"
            onChange={this.onTypeNewTask}
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
