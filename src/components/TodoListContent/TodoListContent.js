import React, {PureComponent} from 'react';
import TodoListData from './TodoListData';
import Categories from '../Categories/Categories';
import Tasks from '../Tasks/Tasks';
import './TodoListContent.css';

class TodoListContent extends PureComponent {

  constructor(props) {

    super(props);

    this.setTodoList = this.setTodoList.bind(this);
    this.selectCategory = this.selectCategory.bind(this);

    const todoList = JSON.parse(localStorage.getItem('reactTodoList'))
    localStorage.setItem('reactTodoList', JSON.stringify(TodoListData));

    this.state = {
      todoList: todoList || TodoListData,
      selectedCategory: null,
    }

    this.actions = {
      selectCategory: this.selectCategory,
      ...this.props.actions
    };
  }

  selectCategory(id) {
    this.setState({
      selectedCategory: id
    });
    console.log(id)
  }

  setTodoList(todoList) {
    const newTodoList = {
      todoList: todoList
    };

    localStorage.setItem('reactTodoList', JSON.stringify(todoList));
    this.setState(newTodoList);
  }


  render() {
    // console.log('Rendering... ', 'TodoListContent');
    const block = <div className="todo-list__content">
      <Categories
        actions={this.actions}
        categories={this.state.todoList.categories}
        selectedCategory={this.state.selectedCategory}
      />

      <Tasks
        actions={this.actions}
        selectedCategory={this.state.selectedCategory}
        tasks={this.state.todoList.tasks}
        query={this.props.query}
      />
    </div>;

    return block;
  }
}

export default TodoListContent;
