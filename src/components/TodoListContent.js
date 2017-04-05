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
          categories={this.props.todoList.categories}
          query={this.props.query}
          selectedCategory={this.props.selectedCategory}
        />


        <Tasks
          actions={this.props.actions}
          selectedCategory={this.props.selectedCategory}
          query={this.props.query}
        />
      </div>;
    return block;
  }
}

export default TodoListContent;
