import React, { Component } from 'react';
import Category from './Category';


class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.createCategory = this.createCategory.bind(this);
  }

  createCategory(categoryObject, index) {
    const isSelected = categoryObject === this.props.selectedCategory;
    const block = <Category
      actions={this.props.actions}
      isSelected={isSelected}
      selectedCategory={this.props.selectedCategory}
      key={categoryObject.id}
      id={categoryObject.id}
      category={categoryObject} />;
    return block;
  }

  render() {

    const categoriesList = this.props.categories.map(this.createCategory);
    const block = <ul className="categories__list">
      {categoriesList}
    </ul>;
    return block;
  }
}

export default CategoriesList;
