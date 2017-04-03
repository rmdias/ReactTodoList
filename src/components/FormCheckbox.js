import React, { Component } from 'react';

class FormCheckbox extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const bem = `${this.props.block}__${this.props.element}`;
    const bemCheckbox = `${bem}-checkbox`;
    const bemLabel = `${bem}-label`;

    let checkboxId = bemCheckbox;

    if(this.props.id) {
      checkboxId += `--${this.props.id}`;
    }

    const block = (
      <span className={bem}>
        <input
          checked={this.props.checked}
          className={`${bemCheckbox} form__input--checkbox`}
          id={checkboxId}
          type='checkbox' />

        <label
          htmlFor={checkboxId}
          className={`${bemLabel} form__label`}>
          {this.props.label}
        </label>
      </span>
    );
    return block;
  }
}

export default FormCheckbox;
