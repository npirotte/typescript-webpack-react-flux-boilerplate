/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import {TTask} from "../../Stores/TaskStore";

import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IProps {
  task: TTask;
  key: any;
}

export default class TaskComponent extends React.Component<IProps, {}> {
  constructor() {
    super();

    this.handleToggle = this.handleToggle.bind(this);
    this.handlerDelete = this.handlerDelete.bind(this);
  }

  shouldComponentUpdate(props: IProps): boolean {
    return this.props.task !== props.task;
  }

  render(): React.ReactElement<{}> {
    let isCompleted: boolean = !!this.props.task.get("completedOn");
    return (
      <div className="list-group-item">
        <label>
          <input type="checkbox" onChange={this.handleToggle} checked={isCompleted} />
          <strong> {this.props.task.get("name")}</strong>
        </label>
        <button className="pull-right btn btn-xs btn-danger" onClick={this.handlerDelete}>Delete</button>
      </div>
    );
  }

  handleToggle(): void {
    TaskActionCreator.toggle(this.props.task);
  }

  handlerDelete(): void {
    TaskActionCreator.delete(this.props.task);
  }
}
