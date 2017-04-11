import _ from 'lodash';
import React, {PureComponent} from 'react';
import FormButton from '../FormButton/FormButton';
import CategoriesList from '../CategoriesList/CategoriesList';
import './Category.css';

class Category extends PureComponent {
  constructor(props) {
    super(props);

    this.categoriesList = this.props.category.categories || [];
    this.id = this.props.category.id;
    this.name = this.props.category.name;

    // Binding Methods
    this.onUnset = this.onUnset.bind(this);
    this.onContentClick = this.onContentClick.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSet = this.onSet.bind(this);
  }

  calculateProgress(category) {
    const onlyDone = (task, index) => task.done === true;
    const tasksDone = category
      .tasks
      .filter(onlyDone);

    const progress = {
      total: category.tasks.length,
      done: tasksDone.length,
    }

    return progress;
  }

  onContentClick(event) {
    const wasTitle = event
      .target
      .classList
      .contains('category__name-button');

    if (wasTitle) {
      this.props.actions.categorySelect(this.props.category);
    }
  }

  onUnset(event) {
    this.props.actions.unsetCategory(this.props.category);
  }

  onEdit(event) {
    this.props.actions.editCategory(this.props.category);
  }

  onSet(event) {
    this.props.actions.setSubCategory(this.props.category);
  }

  render() {
    // console.log('Rendering... ', 'Category');

    const category = this.props.category;
    const isSelected = category === this.props.selectedCategory;

    let categoryClassName = isSelected
      ? 'category--selected'
      : 'category'

    // console.log('Done tasks', this.calculateProgress(category), category.tasks);

    const categories = <CategoriesList
      actions={this.props.actions}
      categories={this.props.actions.getCategories(category.id)}
      query={this.props.query}
      selectedCategory={this.props.selectedCategory}
    />;

    const block = <li className={categoryClassName}>
      <div className="category__content" onClick={this.onContentClick}>

        <FormButton
          action="display"
          block="category"
          element="name"
          id={this.id}
          label={category.name}
          type="link"
        />

        <FormButton
          action="edit"
          block="category"
          element="edit"
          id={this.id}
          label="Edit"
          onClick={this.onEdit}
          type="link"
        />

        <FormButton
          action="delete"
          block="category"
          element="delete"
          id={this.id}
          label="Delete"
          onClick={this.onUnset}
          type="link"
        />

        <FormButton
          action="submit"
          block="category"
          element="submit"
          id={this.id}
          label="Add"
          onClick={this.onSet}
          type="link"
        />

      </div>

      {categories}

    </li>;

    return block;
  }
}

export default Category;
