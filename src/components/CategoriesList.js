import React, { Component } from 'react';
import Category from './Category';


class CategoriesList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    const categories = this.props.categories;
    this.categoriesList = categories.map(this.createCategory);
  }

  createCategory(categoryObject, index) {
    const block = <Category
      key={categoryObject.id}
      id={categoryObject.id}
      category={categoryObject} />;
    return block;
  }

  render() {
    const block = <ul className="categories__list">{this.categoriesList}</ul>;
    return block;
  }
}

export default CategoriesList;
