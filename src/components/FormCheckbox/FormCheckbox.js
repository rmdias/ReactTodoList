import React, {Component} from 'react';
import './FormCheckbox.css';

class FormCheckbox extends Component {

  render() {
    // console.log('Rendering... ', 'FormCheckbox');

    const bem = `${this.props.block}__${this.props.element}`;
    const bemCheckbox = `${bem}-checkbox`;
    const bemLabel = `${bem}-label`;

    let checkboxId = bemCheckbox;

    if (this.props.id) {
      checkboxId += `--${this.props.id}`;
    }

    const block = (
      <span className={bem}>
        <input
          className={`${bemCheckbox} form__input--checkbox`}
          checked={this.props.checked}
          id={checkboxId}
          onChange={this.props.onChange}
          type='checkbox'
        />

        <label htmlFor={checkboxId} className={`${bemLabel} form__label`}>
          {this.props.label}
        </label>
      </span>
    );

    return block;
  }
}

export default FormCheckbox;
