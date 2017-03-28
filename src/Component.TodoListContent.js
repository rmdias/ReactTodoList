import React, { Component } from 'react';
import Categories from './Component.Categories';
import Tasks from './Component.Tasks';

class TodoListContent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <div class="todo-listContent">
        <Categories />
        <Tasks />
      </div>;
    return block;
  }
}

export default TodoListContent;
