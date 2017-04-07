import React, {PureComponent} from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import TasksList from './TasksList';

class Tasks extends PureComponent {
  constructor(props) {
    super(props);

    this.onTypeNewTask = this
      .onTypeNewTask
      .bind(this);

    this.handleSubmit = this
      .handleSubmit
      .bind(this);

    this.state = {
      newTaskDescription: ""
    };
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

  render() {
    // console.log('Rendering... ', 'Tasks');

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
          tasks={this.props.tasks}
        />
      </div>
    </section>;
    return block;
  }
}

export default Tasks;
