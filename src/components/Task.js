import React, { Component } from 'react';
import FormCheckbox from './FormCheckbox';
import FormButton from './FormButton';


class Task extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <li className="task">
        <FormCheckbox
          block="task"
          element="done"
          id="0"
          label="Task description name" />

        <FormButton
          action="edit"
          block="task"
          element="edit"
          id="0"
          label="Edit"
          type="link" />

        <FormButton
          action="delete"
          block="task"
          element="delete"
          id="0"
          label="Delete"
          type="link" />

      </li>;
    return block;
  }
}

export default Task;
