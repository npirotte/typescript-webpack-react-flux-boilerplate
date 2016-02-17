/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
// import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IState {
  name: string;
}

export default class TaskFormComponent extends React.Component<{}, IState> {
  constructor() {
    super();
    this.state = {
      name: null
    };
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="TaskFormComponent">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Task name" />
        </form>
      </div>
    );
  }
}
