import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || ""
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  focus() {
   // Explicitly focus the text input using the raw DOM API
   this.textInput.focus();
 }

  onChange(event) {
    const inputValue = event.target.value;

    this.setState({value: inputValue});

    if (this.props.onChange) {
      this
        .props
        .onChange(event);
    }
  }

  onKeyUp(event) {
    const wasEscPressed = event.keyCode === 27;
    if (wasEscPressed) {
      this.setState({value: ''})
    }
  }

  componenteDidUpdate() {
    console.log('Component updated')
  }

  render() {
    const bem = `${this.props.block}__${this.props.element}`;
    const bemInput = `${bem}-input`;
    const bemLabel = `${bem}-label`;
    const label = this.props.label || this.props.placeholder || "";
    const placeholder = this.props.placeholder || this.props.label || "";
    let inputId = bemInput;

    if (this.props.id) {
      inputId += `--${this.props.id}`;
    }

    const block = (
      <span className={bem}>

        <label
          className={`${bemLabel} form__label`}
          htmlFor={inputId}>{label}</label>

        <input
          autoComplete="off"
          className={`${bemInput} form__input--text`}
          disabled={this.props.disabled}
          id={inputId}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          placeholder={placeholder}
          ref={(input) => { this.textInput = input; }}
          type='text'
          value={this.state.value}
        />

      </span>
    );

    return block;
  }
}

export default FormInput;
