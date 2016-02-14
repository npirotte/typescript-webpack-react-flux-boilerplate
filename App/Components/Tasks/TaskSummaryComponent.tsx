/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import {taskStore, TTaskList, TTask} from "../../Stores/TaskStore";

interface IState {
  tasks: TTaskList;
};

class TaskSummaryComponent extends React.Component<{}, IState> {
  private onChange: () => void = () => {
    this.setState(this.getStateFromStores());
  };

  constructor() {
    super();
    this.state = this.getStateFromStores();
  }

  componentDidMount(): void {
    taskStore.addListener(this.onChange);
  }

  componentWillUnmount(): void {
    taskStore.removeListener(this.onChange);
  }

  render(): React.ReactElement<{}> {
    const tasksNumber: number = this.state.tasks.size;
    const doneNumber: number = this.state.tasks.filter((task: TTask) => {
      const compledOn: Date = task.get("completedOn");
      return compledOn != null;
    }).size;

    return (
      <div>Done : {doneNumber} / {tasksNumber}</div>
    );
  }

  private getStateFromStores (): IState {
    return {
      tasks: taskStore.getState()
    };
  }
}

export default TaskSummaryComponent;
