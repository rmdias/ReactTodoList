import React, { Component } from 'react';
import FormCheckbox from './FormCheckbox';
import FormButton from './FormButton';
import CategoriesList from './CategoriesList';


class Category extends Component {
  constructor(props) {
    super(props);
    this.categoriesList = this.props.category.categories || [];
    this.id = this.props.category.id;
    this.name = this.props.category.name;
  }
  render() {
    const categories = <CategoriesList categories={this.categoriesList} />;
    const block =
      <li className="category">
        <FormCheckbox
          id={this.id}
          block="category"
          element="name"
          label={this.props.category.name} />

        <FormButton
          action="edit"
          block="category"
          element="edit"
          id={this.id}
          label="Edit"
          type="link" />

        <FormButton
          action="delete"
          block="category"
          element="delete"
          id={this.id}
          label="Delete"
          type="link" />

        <FormButton
          action="submit"
          block="category"
          element="submit"
          id={this.id}
          label="Add"
          type="link" />

          {categories}

      </li>;

    return block;
  }
}

export default Category;
