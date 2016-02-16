/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import Task from "../../Models/Task";

import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IProps {
  task: Task;
  key: any;
}

export default class TaskComponent extends React.Component<IProps, {}> {
  private handleToggle: () => void = () => {
    TaskActionCreator.toggle(this.props.task);
  };

  private handlerDelete: () => void = () => {
    TaskActionCreator.delete(this.props.task);
  };

  constructor() {
    super();
    this.handlerDelete = this.handlerDelete.bind(this);
  }

  shouldComponentUpdate(props: IProps): boolean {
    return this.props.task !== props.task;
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="list-group-item">
        <label>
          <input type="checkbox" onChange={this.handleToggle} checked={this.props.task.isCompleted} />
          <strong> {this.props.task.name}</strong>
        </label>
        <button className="pull-right btn btn-xs btn-danger" onClick={this.handlerDelete}>Delete</button>
      </div>
    );
  }
}
