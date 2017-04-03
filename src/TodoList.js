import React, { Component } from 'react';
import TodoListHeader from './components/TodoListHeader';
import TodoListContent from './components/TodoListContent';
import './TodoList.css';

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
