import React, { Component } from 'react';
import FormInput from './Component.FormInput';
import FormButton from './Component.FormButton';
import CategoriesList from './Component.CategoriesList';


class Categories extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <section className="categories">
        <header className="categories__header">
          <h2 className="categories__title">Categories</h2>
          <form action="" className="categories__create">
            <h3>Create Category</h3>

            <FormInput
              block="categories"
              element="create"
              label="Enter category title" />

            <FormButton
              action="submit"
              block="categories"
              element="create-submit"
              label="Add" />

          </form>
        </header>
        <div className="categories__content">
          <h3 className="categories__title">Categories List</h3>
          <CategoriesList />
        </div>
      </section>;
    return block;
  }
}

export default Categories;
