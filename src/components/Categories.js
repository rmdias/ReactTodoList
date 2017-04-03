import React, { Component } from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import CategoriesList from './CategoriesList';


class Categories extends Component {
  constructor(props) {
    super(props);

    this.onTypeNewCategory = this.onTypeNewCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      newCategoryName: ""
    };
  }

  onTypeNewCategory(event) {
    const newCategoryName = event.target.value
    this.setState({
      newCategoryName: newCategoryName
    });
    // console.log('newCategoryName',newCategoryName);
  }

  handleSubmit(event) {
    this.createNewCategory(this.state.newCategoryName);
  }

  createNewCategory(name) {
    console.log('Creating new category: ', name, this.props.todoList);

    console.log(`Category ${name} was created`);
    this.setState({
      newCategoryName: ""
    });
  }

  render() {
    const block =
      <section className="categories">
        <header className="categories__header">
          <h2 className="categories__title">Categories</h2>
          <form action="" onSubmit={this.handleSubmit} className="categories__create">
            <h3 className="categories__sub-title">Create Category</h3>

            <FormInput
              block="categories"
              element="create"
              onChange={this.onTypeNewCategory}
              value={this.state.newCategoryName}
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
          <CategoriesList categories={this.props.categories} />
        </div>
      </section>;
    return block;
  }
}

export default Categories;
