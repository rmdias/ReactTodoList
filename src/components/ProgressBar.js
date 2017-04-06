import React , { PureComponent }from 'react';

class ProgressBar extends PureComponent {
  render() {
  console.log('Rendering... ', 'ProgressBar');

    const block = <progress
      className="todo-list__progress"
      max={this.props.max}
      value={this.props.value}
    />;
    return block;
  }
}

export default ProgressBar;
