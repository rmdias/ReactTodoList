import React, { Component } from 'react';
import TodoListHeader from './components/TodoListHeader';
import TodoListContent from './components/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.setNewCategory = this.setNewCategory.bind(this);
    this.set = this.set.bind(this);
    this.categoriesLength = 0;
    this.categoriesMaxLength = 0;

    this.state = {
      tasksLength: 0,
      tasksDone: 0,
      query: "",
      todoList: this.props.todoList,
      selectedCategory: null,
    };
  }

  set(name, value) {
    const property = {};
    property[name] = value;
    this.setState(property)
  }



  setCategoriesLength(newValue) {
    console.log('setCategoriesLength', newValue);
    this.categoriesLength = newValue;

    const currentMax = this.categoriesMaxLength;
    this.categoriesMaxLength = Math.max(currentMax, newValue);
  }

  setTasksLength(value) {
    this.set('tasksLength', value);
  }

  setTodoList(todoList) {
    const newTodoList = {
      todoList: todoList
    };

    this.categoriesLength = 0;
    this.categoriesMaxLength = 0;

    console.log('Setting new todoList', newTodoList);

    this.setState(newTodoList);
  }

  setNewCategory(category) {
    console.log('Creating new category', this.state.todoList)
    const newTodoList = {
      'categories': [category, ...this.state.todoList.categories]
    }
    this.setTodoList(newTodoList);
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
    const actions = {
      setCategoriesLength: this.setCategoriesLength,
      set: this.set,
      search: this.onSearch,
      setNewCategory: this.setNewCategory,
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
        id: 0,
        name: "Home",
        tasks: [
          {
            id: 1,
            description: "Pay taxes",
            done: true,
          },
          {
            id: 2,
            description: "Pay rent",
            done: false,
          }
        ],

        categories: [
          {
            id: 2,
            name: "Kitchen",
            tasks: [
              {
                id: 3,
                description: "Clean oven",
                done: false
              },
              {
                id: 4,
                description: "Throw garbage away",
                done: true
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Office",
        tasks: [
          {
            id: 5,
            description: "Call Adam",
            done: false,
          },
          {
            id: 6,
            description: "Meetign with customer",
            done: false,
          }
        ],

        categories: [
          {
            id: 4,
            name: "Desktop",
            tasks: [
              {
                id: 7,
                description: "Change computer",
                done: false
              },
              {
                id: 9,
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
