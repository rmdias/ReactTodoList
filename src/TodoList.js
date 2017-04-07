import React, {Component} from 'react';
import TodoListHeader from './components/TodoListHeader';
import TodoListContent from './components/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.categoriesLength = 0;
    this.categoriesMaxLength = 0;
    this.search = this.search.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.setTodoList = this.setTodoList.bind(this);
    this.set = this.set.bind(this);

    const todoList = JSON.parse(localStorage.getItem('reactTodoList'))

    this.state = {
      query: "",
      selectedCategory: null,
      tasksDone: 0,
      tasksLength: 0,
      todoList: todoList || this.props.todoList
    };
  }

  set(name, value) {
    const property = {};
    property[name] = value;
    this.setState(property)
  }

  setTodoList(todoList) {
    const newTodoList = {
      todoList: todoList
    };

    localStorage.setItem('reactTodoList', JSON.stringify(todoList));
    this.setState(newTodoList);
  }

  search(query) {
    this.set('query', query);
  }

  selectCategory(category) {
    this.set('selectedCategory', category);
  }

  render() {
    const actions = {
      search: this.search,
      selectCategory: this.selectCategory,
      set: this.set,
      setCategoriesLength: this.setCategoriesLength,
      setNewCategory: this.setNewCategory,
      setTask: this.setTask,
      setTodoList: this.setTodoList
    }

    const block = <div className="todo-list">
      <TodoListHeader
        actions={actions}/>

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
            done: true
          }, {
            id: 2,
            description: "Pay rent",
            done: false
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
              }, {
                id: 4,
                description: "Throw garbage away",
                done: true
              }
            ]
          }
        ]
      }, {
        id: 3,
        name: "Office",
        tasks: [
          {
            id: 5,
            description: "Call Adam",
            done: false
          }, {
            id: 6,
            description: "Meetign with customer",
            done: false
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
              }, {
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
