/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IState {
  name: string;
}

export default class TaskFormComponent extends React.Component<{}, IState> {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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

  handleChange(e: any): void {
    this.setState({name: e.target.value});
  }

  handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    TaskActionCreator.add(this.state.name);
    this.setState({name: null});
  }
}
