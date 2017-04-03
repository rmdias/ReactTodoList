import React, { Component } from 'react';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import FormButton from './FormButton';

class TodoListHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <header className="todo-list__header">
        <h1 className="todo-list__title">React Todo List</h1>
        <form className="search__form">
          <h2>Search</h2>
          <FormCheckbox
            block="search"
            element="done"
            label="Show done" />

          <FormInput
            block="search"
            element="query"
            label="Search"
            placeholder="Search" />

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
