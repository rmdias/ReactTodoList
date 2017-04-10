import _ from 'lodash';
import React, {PureComponent} from 'react';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import TasksList from '../TasksList/TasksList';
import './Tasks.css';

class Tasks extends PureComponent {
  constructor(props) {
    super(props);

    this.getTasks = this.getTasks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTypeNewTask = this.onTypeNewTask.bind(this);

    this.state = {
      newTaskDescription: ""
    };

    this.actions = {
      getTasks: this.getTasks,
      ...this.props.actions
    }
  }

  onTypeNewTask(event) {
    const newTaskDescription = event.target.value
    this.setState({newTaskDescription: newTaskDescription});
    console.log('newTaskDescription', newTaskDescription);
  }

  handleSubmit(event) {
    this.createNewTask(this.state.newTaskDescription);
  }

  createNewTask(name) {
    console.log('Creating new category: ', name, this.props.todoList);
    console.log(`Task ${name} was created`);
    this.setState({newTaskDescription: ""});
  }

  getTasks() {
    const category = this.props.selectedCategory;

    if(!!category) {
      const tasks = _.filter(this.props.tasks, { cat: category.id });
      return tasks;
    } else {
      return [];
    }

  }



  render() {
    // console.log('Rendering... ', 'Tasks');
    const tasks = this.getTasks();
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
          actions={this.props.actions}
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
