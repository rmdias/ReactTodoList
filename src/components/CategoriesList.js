import React, { Component } from 'react';
import Category from './Category';


class CategoriesList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <ul className="categories__list">
        <Category />
      </ul>;
    return block;
  }
}

export default CategoriesList;
