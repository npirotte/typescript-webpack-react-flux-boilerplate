/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IState {
  name: string;
}

export default class TaskFormComponent extends React.Component<{}, IState> {
  private handleSubmit: (e: React.FormEvent) => void = (e: React.FormEvent) => {
    e.preventDefault();
    TaskActionCreator.add(this.state.name);
    this.setState({name: null});
  };

  private handleChange: (e: React.KeyboardEvent) => void = (e: React.KeyboardEvent) => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setState({name: target.value});
  };

  constructor() {
    super();
    this.state = {
      name: null
    };
  }

  render(): React.ReactElement<{}> {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="task"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Add a new task" />
        </form>
      </div>
    );
  }
}
