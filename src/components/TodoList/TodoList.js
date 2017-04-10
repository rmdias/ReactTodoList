import React, {Component} from 'react';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoListContent from '../TodoListContent/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.set = this.set.bind(this);

    this.state = {
      query: ""
    };
  }

  set(name, value) {
    const property = {};
    property[name] = value;
    this.setState(property)
  }

  search(query) {
    this.set('query', query);
  }

  render() {
    const actions = {
      search: this.search,
      set: this.set,
    }

    const block = <div className="todo-list">
      <TodoListHeader
        actions={actions}
      />

      <TodoListContent
        actions={actions}
        query={this.state.query}
      />
    </div>;
    return block;
  }
}

export default TodoList;
