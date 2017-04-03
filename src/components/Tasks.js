import React, { Component } from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import TasksList from './TasksList';


class Tasks extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
    <section className="tasks">
      <header className="tasks__header">
        <h2 className="tasks__title">Tasks</h2>
        <form action="" className="tasks__create">
          <h3>Create Task</h3>

          <FormInput
            block="tasks"
            element="create"
            label="Task description" />

          <FormButton
            action="submit"
            block="tasks"
            element="submit"
            id="0"
            label="Add"
            type="link" />

        </form>
      </header>
      <div className="tasks__content">
        <h3 className="tasks__title">Categories List</h3>
        <TasksList />
      </div>
    </section>;
    return block;
  }
}

export default Tasks;
