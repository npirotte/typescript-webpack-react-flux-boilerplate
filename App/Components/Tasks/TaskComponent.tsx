/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import {TTask} from "../../Stores/TaskStore";
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IProps {
  task: TTask;
  key: string | number;
};

export default class TaskComponent extends React.Component<IProps, {}> {
  private handleDelete: () => void = (): void => {
    TaskActionCreator.delete(this.props.task);
  };

  constructor() {
    super();
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="list-group-item">
        <button className="btn btn-xs btn-danger pull-right" onClick={this.handleDelete}>
          Delete
        </button>
        {this.props.task.get("name")}
      </div>
    );
  }
}
