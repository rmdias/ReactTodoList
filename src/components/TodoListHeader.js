import React, { PureComponent } from 'react';
import Search from './Search';
import ProgressBar from './ProgressBar';

class TodoListHeader extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  shouldComponentUpdate() {
    return false;
  }


  render() {
  // console.log('Rendering... ', 'TodoListHeader');

    const block =
      <header className="todo-list__header">
        <h1 className="todo-list__title">React Todo List</h1>

        <Search
          actions={this.props.actions}
          query={this.props.query}
         />

         <ProgressBar max="100" value="50" />

      </header>;
    return block;
  }
}

export default TodoListHeader;
