/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import {taskStore, TTaskList} from "../../Stores/TaskStore";
import Task from "../../Models/Task";

import TaskComponent from "./TaskComponent";

interface IState {
  tasks: TTaskList;
};

export default class TaskListComponent extends React.Component<{}, IState> {
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

  render (): React.ReactElement<{}> {
    return (
      <div className="list-group">
        {this.state.tasks.map((task: Task): React.ReactElement<{}> => {
          return <TaskComponent task={task} key={task.get("id")} />;
        }).toArray()}
      </div>
    );
  }

  private getStateFromStores (): IState {
    return {
      tasks: taskStore.getState()
    };
  }
}
