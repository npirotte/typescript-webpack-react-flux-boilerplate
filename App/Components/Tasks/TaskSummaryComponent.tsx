/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import {taskStore, TTaskList} from "../../Stores/TaskStore";
import Task from "../../Models/Task";
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

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
    const doneNumber: number = this.state.tasks.filter((task: Task) => {
      const compledOn: Date = task.get("completedOn");
      return compledOn != null;
    }).size;

    return (
      <div>
        <button className="pull-right btn btn-sm btn-danger" onClick={this.handlerDeleteAll}>
          Delete all
        </button>
        Done : {doneNumber} / {tasksNumber}
      </div>
    );
  }

  handlerDeleteAll(): void {
    TaskActionCreator.deleteAll();
  }

  private getStateFromStores (): IState {
    return {
      tasks: taskStore.getState()
    };
  }
}

export default TaskSummaryComponent;
