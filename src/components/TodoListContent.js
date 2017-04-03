import React, { Component } from 'react';
import Categories from './Categories';
import Tasks from './Tasks';

class TodoListContent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <div className="todo-listContent">
        <Categories />
        <Tasks />
      </div>;
    return block;
  }
}

export default TodoListContent;