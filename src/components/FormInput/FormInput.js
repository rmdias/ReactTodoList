import React, {Component} from 'react';
import './FormInput.css';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || ""
    }

    this.onKeyUp = this
      .onKeyUp
      .bind(this);
    this.onChange = this
      .onChange
      .bind(this);
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

  render() {
    // console.log('Rendering... ', 'FormInput');

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
          className={`${bemInput} form__input--text`}
          id={inputId}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          placeholder={placeholder}
          disabled={this.props.disabled}
          type='text'
          value={this.state.value}
        />

      </span>
    );

    return block;
  }
}

export default FormInput;
