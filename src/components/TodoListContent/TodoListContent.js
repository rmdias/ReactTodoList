import _ from 'lodash';
import React, {PureComponent} from 'react';
import TodoListData from './TodoListData';
import Categories from '../Categories/Categories';
import Tasks from '../Tasks/Tasks';
import './TodoListContent.css';

class TodoListContent extends PureComponent {

  constructor(props) {

    super(props);

    this.setTodoList = this.setTodoList.bind(this);
    this.categorySelect = this.categorySelect.bind(this);
    this.unset = this.unset.bind(this);
    this.set = this.set.bind(this);
    this.add = this.add.bind(this);
    this.nextId = this.nextId.bind(this);

    const todoList = JSON.parse(localStorage.getItem('reactTodoList'))
    // localStorage.setItem('reactTodoList', JSON.stringify(TodoListData));

    this.state = {
      todoList: todoList || TodoListData,
      // todoList: todoList,
      // todoList: TodoListData,
      selectedCategory: null,
    }

    this.actions = {
      add: this.add,
      set: this.set,
      unset: this.unset,
      nextId: this.nextId,
      categorySelect: this.categorySelect,
      ...this.props.actions
    };
  }

  cloneTodoList() {
    return _.cloneDeep(this.state.todoList)
  }

  setTodoList(todoList) {
    localStorage.setItem('reactTodoList', JSON.stringify(todoList));
    this.setState({
      todoList: todoList
    });
  }

  unset(collection, item) {
    // Copy todo list
    const newTodoList = this.cloneTodoList();

    // Find element
    // Remove element
    newTodoList[collection] = _.reject(newTodoList[collection], {
      id:item.id
    });

    // Set new todo List
    this.setTodoList(newTodoList);
  }

  set(collection, item) {

    // Unset element
    // Get new todo List
    const newTodoList = this.cloneTodoList();
    const oldItem = _.find(newTodoList[collection], {id: item.id});

    _.assign(oldItem, item);

    // Set new todo List
    this.setTodoList(newTodoList);
  }

  add(collection, item) {
    // Unset element
    // Get new todo List
    const newTodoList = this.cloneTodoList();
    newTodoList[collection] = [item, ...newTodoList[collection]];

    // Set new todo List
    this.setTodoList(newTodoList);
  }

  nextId(collection) {
    const nextId = _(this.state.todoList[collection]).map('id').max() || 0;
    return nextId + 1;
  }


  categorySelect(id) {
    this.setState({
      selectedCategory: id
    });
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
