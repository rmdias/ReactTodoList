import React, {PureComponent} from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import CategoriesList from './CategoriesList';

class Categories extends PureComponent {
  constructor(props) {
    super(props);

    // Binding Methods
    this.appendCategoriesLength = this.appendCategoriesLength.bind(this);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTypeNewCategory = this.onTypeNewCategory.bind(this);
    this.setNewCategory = this.setNewCategory.bind(this);
    this.unsetCategory = this.unsetCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.addSubCategory = this.addSubCategory.bind(this);

    this.categoriesLength = 0;

    this.state = {
      newCategoryName: ""
    };
  }

  appendCategoriesLength(value) {
    this.categoriesLength += value;
  }

  onTypeNewCategory(event) {
    const newCategoryName = event.target.value
    this.setState({newCategoryName: newCategoryName});
  }

  onSubmit(event) {
    event.preventDefault();
    this.createNewCategory(this.state.newCategoryName);
  }

  createNewCategory(newCategoryName) {

    const newCategory = {
      categories: [],
      id: this.categoriesLength,
      name: newCategoryName,
      tasks: [],
    }

    this.setNewCategory(newCategory);
  }


  setNewCategory(category) {
    const newTodoList = {
      'categories': [
        category, ...this.props.todoList.categories
      ]
    }
    this.props.actions.setTodoList(newTodoList);
  }

  unsetCategory(category) {
    console.log('Unseting this category', category);
  }

  editCategory(category) {
    console.log('Editing this category', category);
  }

  addSubCategory(category) {
    console.log('Add a subcategory into this category', category);
  }

  render() {
    // console.log('Rendering... ', 'Categories');
    this.categoriesLength = 0;

    const actions = {
      appendCategoriesLength: this.appendCategoriesLength,
      unsetCategory: this.unsetCategory,
      editCategory: this.editCategory,
      addSubCategory: this.addSubCategory,
      ...this.props.actions,
    };

    const block = <section className="categories">
      <header className="categories__header">
        <h2 className="categories__title">Categories</h2>
        <form
          action=""
          onSubmit={this.onSubmit}
          className="categories__create-form">
          <h3
            className="categories__sub-title">Create Category</h3>

          <FormInput
            block="categories"
            element="create-input"
            onChange={this.onTypeNewCategory}
            value={this.state.newCategoryName}
            label="Add new category"
          />

          <FormButton
            action="submit"
            block="categories"
            element="create-submit"
            label="Add"
          />

        </form>
      </header>
      <div className="categories__content">
        <h3 className="categories__title">Categories List</h3>
        <CategoriesList
          actions={actions}
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
