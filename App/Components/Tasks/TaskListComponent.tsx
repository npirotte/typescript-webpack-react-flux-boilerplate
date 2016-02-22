/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

/**
 * @note: For the typing of our state, we need to import the task list type TTaskList exposed by our TaskStore module
 */
import {taskStore, TTaskList} from "../../Stores/TaskStore";
import Task from "../../Models/Task";
import TaskComponent from "./TaskComponent";

interface IState {
  tasks: TTaskList;
};

export default class TaskListComponent extends React.Component<{}, IState> {
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

  render (): React.ReactElement<{}> {
    return (
      <div className="list-group">
        {this.state.tasks.map((task: Task) => {
          return <TaskComponent task={task} key={task.get("id")} />;
        })}
      </div>
    );
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
