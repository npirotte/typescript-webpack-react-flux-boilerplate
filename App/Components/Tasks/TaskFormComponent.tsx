/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IState {
  name: string;
}

export default class TaskFormComponent extends React.Component<{}, IState> {
  private handleChange: (evt: React.KeyboardEvent) => void = (evt: React.KeyboardEvent): void => {
    const inputElm: HTMLInputElement = evt.target as HTMLInputElement;
    this.setState({
        name: inputElm.value
    });
  };

  private handleSubmit: (evt: React.FormEvent) => void = (evt: React.FormEvent): void => {
    evt.preventDefault();
    TaskActionCreator.add(this.state.name);
    this.setState({
      name: null
    });
  };

  constructor() {
    super();
    this.state = {
      name: null
    };
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="TaskFormComponent">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            className="form-control"
            type="text"
            placeholder="What should be done" />
        </form>
      </div>
    );
  }
}
