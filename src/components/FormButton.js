import React, { Component } from 'react';

class FormButton extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const bem = `${this.props.block}__${this.props.element}`;
    const bemButton = `${bem}-button`;
    const label = this.props.label;
    let href = `#${this.props.action}`;
    let id = bemButton;

    if(this.props.id) {
      id += `--${this.props.id}`;
      href = `#${id}`;
    }

    if(this.props.type === 'link') {
      return <a
               className={`${bemButton} form__button--link`}
               href={href}
               id={id}>{label}</a>
    } else {

      var inputType = this.props.action || 'button';

      return <input
               className={`${bemButton} form__button`}
               id={id}
               name={this.props.action}
               type={inputType}
               value={label} />;
    }
  }
}

export default FormButton;
