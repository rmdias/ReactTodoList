import React, { Component } from 'react';
import TodoListHeader from './components/TodoListHeader';
import TodoListContent from './components/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.selectCategory = this.selectCategory.bind(this);


    this.state = {
      tasksTotal: 0,
      tasksDone: 0,
      query: "",
      todoList: this.props.todoList,
      selectedCategory: null,
    };
  }

  setTodoList(todoList) {
    this.setState({
      todoList: todoList
    })
  }

  setTask(task, state) {
    console.log('setTask', task, state);
  }

  onSearch(query) {
    this.setState({
      query: query
    });
  }

  selectCategory(category) {
    this.setState({
      selectedCategory: category
    });
  }

  render() {
    console.log('Rendering', "Todo list")
    const actions = {
      search: this.onSearch,
      selectCategory: this.selectCategory,
      setTask: this.setTask,
      setTodoList: this.setTodoList
    }
    const block =
      <div className="todo-list">
        <TodoListHeader
          actions={actions}
          // query={this.state.query}
        />
        <TodoListContent
          actions={actions}
          query={this.state.query}
          selectedCategory={this.state.selectedCategory}
          todoList={this.state.todoList}
        />
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
            done: true,
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
                done: true
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
