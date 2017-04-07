import React, {PureComponent} from 'react';
import FormCheckbox from './FormCheckbox';
import FormButton from './FormButton';

class Task extends PureComponent {
  constructor(props) {
    super(props);

    this.onContentClick = this
      .onContentClick
      .bind(this);

    this.onChange = this
      .onChange
      .bind(this);

    this.state = {
      done: this.props.task.done
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  onChange(event) {
    this.setState({done: event.target.checked});
    // const task = {...this.props.task, done: this.state.done};
    this
      .props
      .actions
      .setTask(this.props.task, this.state.done);
  }

  onContentClick(event) {
    const tagName = event.target.tagName;
    const forbiddenTags = ['A', 'LABEL', 'INPUT',];
    const shouldChange = forbiddenTags.indexOf(tagName) === -1;

    if (shouldChange) {
      this.setState({
        done: !this.state.done
      });
    }
  }

  render() {
    // console.log('Rendering... ', 'Task');

    const task = this.props.task;

    const block = <li className="task" onClick={this.onContentClick}>
      <FormCheckbox
        block="task"
        checked={this.state.done}
        onChange={this.onChange}
        element="description"
        id={task.id}
        label={task.description}
      />

      <FormButton
        action="edit"
        block="task"
        element="edit"
        id={task.id}
        label="Edit"
        type="link"
      />

      <FormButton
        action="delete"
        block="task"
        element="delete"
        id={task.id}
        label="Delete"
        type="link"
      />

    </li>;
    return block;
  }
}

export default Task;
