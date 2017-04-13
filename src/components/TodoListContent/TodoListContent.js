import _ from 'lodash';
import React, {PureComponent} from 'react';
import TodoListData from './TodoListData';
import Categories from '../Categories/Categories';
import Tasks from '../Tasks/Tasks';
import './TodoListContent.css';

class TodoListContent extends PureComponent {

  constructor(props) {

    super(props);

    this.add = this.add.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
    this.get = this.get.bind(this);
    this.getNextId = this.getNextId.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.set = this.set.bind(this);
    this.setTodoList = this.setTodoList.bind(this);
    this.unset = this.unset.bind(this);
    this.unsetMany = this.unsetMany.bind(this);

    const todoList = JSON.parse(localStorage.getItem('reactTodoList'))
    // localStorage.setItem('reactTodoList', JSON.stringify(TodoListData));

    this.state = {
      todoList: todoList || TodoListData,
      // todoList: todoList,
      // todoList: TodoListData,
      editMode: null,
      selectedCategory: null,
      selectedTask: null,
    }

    this.actions = {
      add: this.add,
      enterEditMode: this.enterEditMode,
      exitEditMode: this.exitEditMode,
      get: this.get,
      getNextId: this.getNextId,
      selectCategory: this.selectCategory,
      selectedTask: this.selectedTask,
      set: this.set,
      unset: this.unset,
      unsetMany: this.unsetMany,
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

  unsetMutation(newTodoList, collection, items) {
      // Tasks or Categories
      const dirtyCollection = newTodoList[collection];

      // Remove element(s)
      const ids = _.map(_.flatten([items]), 'id');
      const hasId = (item) => _.indexOf(ids, item.id) !== -1;
      const cleanColletion = _.reject(dirtyCollection, hasId);

      // Mutate the new todo list
      newTodoList[collection] = cleanColletion;

      return newTodoList;
  }

  unset(collection, items) {
    // Clone list
    let newTodoList = this.cloneTodoList();

    //Mutate List
    newTodoList = this.unsetMutation(newTodoList, collection, items);

    // Set mutated
    this.setTodoList(newTodoList);
  }

  unsetMany(actions) {

    // Clone list
    let newTodoList = this.cloneTodoList();

    //Mutate List many times
    actions.forEach((action) => {
      newTodoList = this.unsetMutation(newTodoList, action.collection, action.items);
    });

    // Set the clone list
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

  get(collection, filter=[]) {
    return _.filter(this.state.todoList[collection], filter);
  }

  getNextId(collection) {
    const nextId = _(this.state.todoList[collection]).map('id').max() || 0;
    return nextId + 1;
  }

  enterEditMode(collection) {
    this.setState({
      editMode: collection
    });
  }

  exitEditMode() {
    this.setState({
      editMode: null
    });
  }

  selectCategory(id) {

    const isSelected = (id) => id === this.state.selectedCategory;
    const idToSelect = (id) => isSelected(id) ? null : id;

    this.setState({
      selectedCategory: idToSelect(id)
    });
  }

  status() {
    console.log(this.state.todoList.tasks.length, 'Tasks');
    console.log(this.state.todoList.categories.length, 'Categories');
    console.log('Edit mode', this.state.editMode || 'off');
  }

  render() {

    this.status();

    const block = <div className="todo-list__content">
      <Categories
        actions={this.actions}
        categories={this.state.todoList.categories}
        editMode={this.state.editMode}
        selectedCategory={this.state.selectedCategory}
      />

      <Tasks
        actions={this.actions}
        editMode={this.state.editMode}
        query={this.props.query}
        selectedCategory={this.state.selectedCategory}
        tasks={this.state.todoList.tasks}
      />
    </div>;

    return block;
  }
}

export default TodoListContent;
