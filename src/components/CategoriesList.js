import React, { PureComponent } from 'react';
import Category from './Category';


class CategoriesList extends PureComponent {
  constructor(props) {
    super(props);

    this.createCategory = this.createCategory.bind(this);
  }

  createCategory(category, index) {
    const isSelected = category === this.props.selectedCategory;
    const regularExpression = new RegExp(this.props.query, "i");
    const matchQuery = category.name.match(regularExpression);

    const block = <Category
      actions={this.props.actions}
      category={category}
      id={category.id}
      isSelected={isSelected}
      key={category.id}
      selectedCategory={this.props.selectedCategory}
      query={this.props.query}
      matchQuery={matchQuery}
    />;
    return block;
  }

  render() {
    const categories = this.props.categories;
    this.props.actions.appendCategoriesLength(categories.length);
    const categoriesList = categories.map(this.createCategory);
    const block = <ul className="categories__list">
      {categoriesList}
    </ul>;
    return block;
  }
}

export default CategoriesList;
