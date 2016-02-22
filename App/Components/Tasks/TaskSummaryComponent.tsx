/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

/**
 * @note: For the typing of our state, we need to import the task list type TTaskList exposed by our TaskStore module
 */
import {taskStore, TTaskList} from "../../Stores/TaskStore";
import Task from "../../Models/Task";
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IState {
  tasks: TTaskList;
};

export default class TaskSummaryComponent extends React.Component<{}, IState> {
  /**
   * @note: Here the usage of lambda expressions () => {} allow us to get rid of the manual context binding in the constructor
   * and thus allow a safer and clearer coding.
   * The private declaration is optionnal an simply prevent the handlers to be used outside of the component itself
   */
  private onChange: () => void = () => {
    this.setState(this.getStateFromStores());
  };

  constructor() {
    super();
    this.state = this.getStateFromStores();
  }
  /**
   * Add change listenners to stores
   */
  componentDidMount(): void {
    taskStore.addListener(this.onChange);
  }
  /**
   * Remove change listenners to stores
   */
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
  /**
   * Centralise binding between the component and the store in one unique function.
   */
  private getStateFromStores (): IState {
    return {
      tasks: taskStore.getState()
    };
  }
}
