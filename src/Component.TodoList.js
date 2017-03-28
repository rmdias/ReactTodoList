import React, { Component } from 'react';
import TodoListHeader from './Component.TodoListHeader';
import TodoListContent from './Component.TodoListContent';

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <div className="todo-list">
        <TodoListHeader />
        <TodoListContent />
      </div>;
    return block;
  }
}

export default TodoList;
