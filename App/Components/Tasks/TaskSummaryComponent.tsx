/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import {taskStore, TTaskList, TTask} from "../../Stores/TaskStore";

interface IState {
  tasks: TTaskList;
}

class TaskSummaryComponent extends React.Component<{}, IState> {
  constructor() {
    super();

    this.state = this.getStateFromStores();
  }

  render(): React.ReactElement<{}> {
    return (
      <div></div>
    );
  }

  getStateFromStores(): IState {
    return {
      tasks: taskStore.getState()
    };
  }
}
