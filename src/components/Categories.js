import React, { PureComponent } from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import CategoriesList from './CategoriesList';


class Categories extends PureComponent {
  constructor(props) {
    super(props);

    this.onTypeNewCategory = this.onTypeNewCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newCategoryName: ""
    };
  }
  
  shouldComponentUpdate() {
    return false;
  }


  onTypeNewCategory(event) {
    const newCategoryName = event.target.value
    this.setState({
      newCategoryName: newCategoryName
    });
    // console.log('newCategoryName',newCategoryName);
  }

  onSubmit(event) {
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
  console.log('Rendering... ', 'Categories');

    const block =
      <section className="categories">
        <header className="categories__header">
          <h2 className="categories__title">Categories</h2>
          <form action="" onSubmit={this.onSubmit} className="categories__create-form">
            <h3 className="categories__sub-title">Create Category</h3>

            <FormInput
              block="categories"
              element="create-input"
              onChange={this.onTypeNewCategory}
              value={this.state.newCategoryName}
              label="Add new category" />

            <FormButton
              action="submit"
              block="categories"
              element="create-submit"
              label="Add" />

          </form>
        </header>
        <div className="categories__content">
          <h3 className="categories__title">Categories List</h3>
          <CategoriesList
            actions={this.props.actions}
            categories={this.props.categories}
            selectedCategory={this.props.selectedCategory}
            query={this.props.query}
          />
        </div>
      </section>;
    return block;
  }
}

export default Categories;
