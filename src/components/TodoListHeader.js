import React, { Component } from 'react';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import FormButton from './FormButton';

class TodoListHeader extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      query: this.props.query || ""
    }
  }

  onChange(event) {
    const inputValue = event.target.value;

    this.setState({
      query: event.target.value
    });

    console.log(inputValue);
  }

  onSubmit() {
    console.log("submiting", this.state.query);
    this.props.actions.search(this.state.query);
  }

  render() {
    const block =
      <header className="todo-list__header">
        <h1 className="todo-list__title">React Todo List</h1>
        <form onSubmit={this.onSubmit} className="search__form">
          <h2 className="search__title">Search</h2>

          <FormInput
            block="search"
            element="query"
            label="Search"
            onChange={this.onChange}
            value={this.state.query}
            placeholder="Search" />

          <FormCheckbox
            block="search"
            element="done"
            label="Show done" />


          <FormButton
            action="submit"
            block="search"
            element="query-submit"
            label="Search" />

          <FormButton
            action="reset"
            block="search"
            element="query-reset"
            label="Clear" />

        </form>
        <progress
          className="todo-list__progress"
          max="100"
          value="80" />
      </header>;
    return block;
  }
}

export default TodoListHeader;
