import React, { Component } from 'react';
import Categories from './Categories';
import Tasks from './Tasks';

class TodoListContent extends Component {
  constructor(props) {
    super(props);

    this.tasks = [];
    this.state = {
      tasks: this.tasks
    }
  }

  setTasks(tasks) {
    this.setState({
      tasks: tasks
    })
  }

  render() {
    const block =
      <div className="todo-list__content">
        <Categories setTasks={this.setTasks} categories={this.props.todoList.categories} />
        <Tasks tasks={this.state.tasks} />
      </div>;
    return block;
  }
}

export default TodoListContent;
