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
    this.addSubCategory = this.addSubCategory.bind(this);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.createNewCategoryUnderRoot = this.createNewCategoryUnderRoot.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getDescendants = this.getDescendants.bind(this);
    this.getNextCategoryId = this.getNextCategoryId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTypeNewCategory = this.onTypeNewCategory.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.unsetCategory = this.unsetCategory.bind(this);

    this.state = {
      newCategoryName: "",
    };

    this.actions = {
      addCategory: this.addCategory,
      addSubCategory: this.addSubCategory,
      getCategories: this.getCategories,
      setCategory: this.setCategory,
      unsetCategory: this.unsetCategory,
      ...this.props.actions
    };

  }

  /**
  * Component actions
  **/
  createNewCategory(newCategoryName, parentCategoryId = null) {

    const newCategory = {
      id: this.getNextCategoryId(),
      name: newCategoryName,
      parent: parentCategoryId,
    }

    this.addCategory(newCategory);
  }

  createNewCategoryUnderRoot(newCategoryName) {
    this.createNewCategory(newCategoryName)
  }

  /**
  * Collection Management
  **/

  addSubCategory(category) {
    this.props.actions.selectCategory(category);
    this.props.actions.enterEditMode('categories');

    const promptMessage = `Add new category under ${category.name}`;
    const placeholderText = 'Category name';
    const newCategoryName = prompt(promptMessage, placeholderText);
    const isNameValid = newCategoryName !== null && !!newCategoryName.trim();

    if(isNameValid) {
      this.createNewCategory(newCategoryName, category.id);
    }

    this.props.actions.exitEditMode();
  }

  addCategory(category) {
    this.props.actions.add('categories', category);
  }

  setCategory(category) {
    this.props.actions.set('categories', category);
  }

  getNextCategoryId() {
    return this.props.actions.getNextId('categories');
  }

  unsetCategory(category) {
    const categories = this.getTree(category);
    const tasksPredicate = (branch) => this.props.actions.get('tasks', ['cat', branch.id]);
    const tasks = _.flatten(categories.map(tasksPredicate));

    const unsetParams = [
      {
        collection: 'categories',
        items: categories
      },

      {
        collection: 'tasks',
        items: tasks
      }
    ]

    this.props.actions.unsetMany(unsetParams);
  }


  getDescendants(parent) {
    const categories = this.props.categories;
    const getChildren = (parent) => _.filter(categories, ['parent', parent.id]);
    const children = getChildren(parent);
    const grandChildren = _.flatMap(children, this.getDescendants);
    return [...children, ...grandChildren];
  }

  getTree(root) {
    const descendants = this.getDescendants(root);
    return [root, ...descendants];
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
    this.createNewCategoryUnderRoot(this.state.newCategoryName);
    this.setState({newCategoryName: ""});
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
