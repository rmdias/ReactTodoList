import React, { Component } from 'react';
import Category from './Component.Category';


class CategoriesList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const block =
      <ul className="categoriesList">
        <Category />
      </ul>;
    return block;
  }
}

export default CategoriesList;
