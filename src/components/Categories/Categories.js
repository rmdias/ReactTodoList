import _ from 'lodash';
import React, {PureComponent} from 'react';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import CategoriesList from '../CategoriesList/CategoriesList';
import './Categories.css';

class Categories extends PureComponent {
  constructor(props) {
    super(props);

    // Binding Methods
    this.addCategory = this.addCategory.bind(this);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.nextCategoryId = this.nextCategoryId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTypeNewCategory = this.onTypeNewCategory.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.unsetCategory = this.unsetCategory.bind(this);

    this.state = {
      newCategoryName: "",
    };

    this.actions = {
      addCategory: this.addCategory,
      getCategories: this.getCategories,
      setCategory: this.setCategory,
      unsetCategory: this.unsetCategory,
      ...this.props.actions
    };

  }

  /**
  * Component actions
  **/
  createNewCategory(newCategoryName) {

    const parentCategory = this.props.selectedCategory;

    const newCategory = {
      id: this.nextCategoryId(),
      name: newCategoryName,
      parent: !!parentCategory ? parentCategory.id : null,
    }

    this.addCategory(newCategory);
  }

  /**
  * Collection Management
  **/

  addCategory(task) {
    this.props.actions.add('categories', task);
  }

  setCategory(task) {
    this.props.actions.set('categories', task);
  }

  nextCategoryId() {
    return this.props.actions.nextId('categories');
  }

  unsetCategory(task) {
    this.props.actions.unset('categories', task);
  }

  /**
  * Event Handlers
  **/

  onTypeNewCategory(event) {
    const newCategoryName = event.target.value
    this.setState({newCategoryName: newCategoryName});
  }

  onSubmit(event) {
    event.preventDefault();
    this.createNewCategory(this.state.newCategoryName);
  }

  /**
  * Auxiliary methods
  **/

  getCategories(parentId = null) {
      const categories = _.filter(this.props.categories, {
        parent: parentId
      });

      return categories;
  }

  render() {
    // console.log('Rendering... ', 'Categories');
    this.categoriesLength = 0;

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
          actions={this.actions}
          categories={this.getCategories()}
          selectedCategory={this.props.selectedCategory}
          // query={this.props.query}
        />
      </div>
    </section>;

    return block;
  }
}

export default Categories;
