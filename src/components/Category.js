import React, { Component } from 'react';
import FormButton from './FormButton';
import CategoriesList from './CategoriesList';


class Category extends Component {
  constructor(props) {
    super(props);
    this.categoriesList = this.props.category.categories || [];
    this.id = this.props.category.id;
    this.name = this.props.category.name;
    this.onContentClick = this.onContentClick.bind(this);


  }

  onContentClick(event) {
    const wasTitle = event.target.tagName !== "A"
    if(wasTitle) {
      this.props.actions.selectCategory(this.props.category);
    }
  }


  render() {
    const isSelected = this.props.category === this.props.selectedCategory;
    const categoryClassName = isSelected ? 'category--selected' : 'category'

    const categories = <CategoriesList
      actions={this.props.actions}
      categories={this.categoriesList}
    />;
    const block =
      <li className={categoryClassName}>
          <div className="category__content" onClick={this.onContentClick}>
            <span className="category__name">{this.props.category.name}</span>

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

          </div>

          {categories}

      </li>;

    return block;
  }
}

export default Category;
