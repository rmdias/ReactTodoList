import React, { Component } from 'react';
import TodoListHeader from './components/TodoListHeader';
import TodoListContent from './components/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);

    this.state = {
      query: "",
      todoList: this.props.todoList
    };
  }

  onSearch(query) {
    this.setState({
      query: query
    });
    // console.log("Searching for", this.state.query);
  }

  render() {
    const actions = {
      search: this.onSearch
    }

    const block =
      <div className="todo-list">
        <TodoListHeader actions={actions} query={this.state.search} />
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
