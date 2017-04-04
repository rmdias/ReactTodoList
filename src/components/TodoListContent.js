import React, { Component } from 'react';
import Categories from './Categories';
import Tasks from './Tasks';

class TodoListContent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    const block =
      <div className="todo-list__content">
        <Categories
          actions={this.props.actions}
          selectedCategory={this.props.selectedCategory}
          categories={this.props.todoList.categories} />


        <Tasks
          actions={this.props.actions} 
          selectedCategory={this.props.selectedCategory}
        />
      </div>;
    return block;
  }
}

export default TodoListContent;
