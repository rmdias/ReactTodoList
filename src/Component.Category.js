import React, { Component } from 'react';
import FormCheckbox from './Component.FormCheckbox';
import FormButton from './Component.FormButton';


class Category extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <li className="category">
        <FormCheckbox
          id="0"
          block="category"
          element="name"
          label="Category name" />

        <FormButton
          action="edit"
          block="category"
          element="edit"
          id="0"
          label="Edit"
          type="link" />

        <FormButton
          action="delete"
          block="category"
          element="delete"
          id="0"
          label="Delete"
          type="link" />

        <FormButton
          action="submit"
          block="category"
          element="submit"
          id="0"
          label="Add"
          type="link" />

      </li>;
    return block;
  }
}

export default Category;
