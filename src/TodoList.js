import React, { Component } from 'react';
import TodoListHeader from './components/TodoListHeader';
import TodoListContent from './components/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        showDone: false,
        query: ""
      },
      todoList: this.props.todoList
    };
  }
  render() {
    const block =
      <div className="todo-list">
        <TodoListHeader search={this.state.search} />
        <TodoListContent todoList={this.state.todoList} />
      </div>;
    return block;
  }
}

TodoList.defaultProps = {
  todoList: {
    categories: [
      {
        id: "cat-1",
        name: "Home",
        show: false,
        tasks: [
          {
            id: "task-1",
            description: "Pay taxes",
            done: false,
          },
          {
            id: "task-2",
            description: "Pay rent",
            done: false,
          }
        ],

        categories: [
          {
            id: "cat-1-1",
            name: "Kitchen",
            show: false,
            tasks: [
              {
                id: "task-3",
                description: "Clean oven",
                done: false
              },
              {
                id: "task-4",
                description: "Throw garbage away",
                done: false
              }
            ]
          }
        ]
      },
      {
        id: "cat-2",
        name: "Office",
        show: false,
        tasks: [
          {
            id: "task-5",
            description: "Call Adam",
            done: false,
          },
          {
            id: "task-6",
            description: "Meetign with customer",
            done: false,
          }
        ],

        categories: [
          {
            id: "cat-2-1",
            name: "Desktop",
            show: false,
            tasks: [
              {
                id: "task-7",
                description: "Change computer",
                done: false
              },
              {
                id: "task-8",
                description: "Format HD",
                done: false
              }
            ]
          }
        ]
      }
    ]
  }
}

export default TodoList;
