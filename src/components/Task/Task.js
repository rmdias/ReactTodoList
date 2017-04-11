import _ from 'lodash';
import React, {PureComponent} from 'react';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
import FormButton from '../FormButton/FormButton';
import './Task.css';

class Task extends PureComponent {
  constructor(props) {
    super(props);

    this.onContentClick = this.onContentClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      done: this.props.task.done
    }
  }

  cloneTask() {
    return _.clone(this.props.task);
  }

  setProperty(property, value) {

    const newTask = this.cloneTask();
    newTask[property] = value;

    this.props.actions.setTask(newTask);
  }

  setDescription(newDescription) {
    this.setProperty('description', newDescription);
  }

  setDone(newStatus) {
    this.setProperty('done', newStatus);
  }

  onChange(event) {
    this.setState({done: event.target.checked});

    const newTask = this.cloneTask(this.props.task);
    newTask.done = event.target.checked;

    this.setDone(event.target.checked);
  }

  onDelete() {
    this.props.actions.unsetTask(this.props.task);
  }

  onContentClick(event) {
    const tagName = event.target.tagName;
    const forbiddenTags = ['A', 'LABEL', 'INPUT',];
    const shouldChange = forbiddenTags.indexOf(tagName) === -1;

    if (shouldChange) {

      this.setState({
        done: !this.state.done
      });
      this.setDone(!this.state.done);
    }
  }

  render() {
    // console.log('Rendering task', this.props.actions);

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
        onClick={this.onDelete}
        type="link"
      />

    </li>;

    return block;
  }
}

export default Task;
