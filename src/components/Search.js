import React, {PureComponent} from 'react';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import FormButton from './FormButton';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit = this
      .onSubmit
      .bind(this);

    this.onChange = this
      .onChange
      .bind(this);

    this.state = {
      query: this.props.query || ""
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  onChange(event) {
    const inputValue = event.target.value;

    this.setState({query: event.target.value});
    this
      .props
      .actions
      .search(inputValue);
  }

  onSubmit(event) {
    event.preventDefault();
    this
      .props
      .actions
      .search(this.state.query);
  }

  render() {
    // console.log('Rendering... ', 'Search');

    const block = <form onSubmit={this.onSubmit} className="search__form">
      <h2 className="search__title">Search</h2>

      <FormInput
        block="search"
        element="query"
        label="Search"
        onChange={this.onChange}
        placeholder="Search"
        value={this.state.query}
      />

      <FormCheckbox
        block="search"
        element="done"
        label="Show done"
      />

      <FormButton
        action="submit"
        block="search"
        element="query-submit"
        label="Search"
      />

      <FormButton
        action="reset"
        block="search"
        element="query-reset"
        label="Clear"
      />

    </form>;

    return block;
  }
}

export default Search;
