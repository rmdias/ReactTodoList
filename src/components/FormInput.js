import React, { Component } from 'react';

class FormInput extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const bem = `${this.props.block}__${this.props.element}`;
    const bemInput = `${bem}-input`;
    const bemLabel = `${bem}-label`;
    const label = this.props.label || this.props.placeholder || "";
    const placeholder = this.props.placeholder || this.props.label || "";
    let inputId = bemInput;

    if(this.props.id) {
      inputId += `--${this.props.id}`;
    }

    const block = (<span className={bem}>
      <label
        className={`${bemLabel} form__label`}
        htmlFor={inputId}>{label}</label>
      <input
        onChange={this.props.onChange}
        className={`${bemInput} form__input--text`}
        id={inputId}
        placeholder={placeholder}
        type='text'
        value={this.props.value} />
    </span>);
    return block;
  }
}

export default FormInput;
