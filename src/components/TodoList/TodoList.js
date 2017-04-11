import React, {Component} from 'react';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoListContent from '../TodoListContent/TodoListContent';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    
    this.state = {
      query: ""
    };

    this.actions = {
      search: this.search,
      ...this.props.actions
    };
  }

  setProperty(name, value) {
    const property = {};
    property[name] = value;
    this.setState(property)
  }

  search(query) {
    this.setState({
      query: query
    });
  }

  render() {

    const block = <div className="todo-list">
      <TodoListHeader
        actions={this.actions}
      />

      <TodoListContent
        actions={this.actions}
        query={this.state.query}
      />
    </div>;
    return block;
  }
}

export default TodoList;
