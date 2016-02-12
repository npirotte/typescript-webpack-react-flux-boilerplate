/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import {taskStore, TTaskList, TTask} from "../../Stores/TaskStore";

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
       console.log(this.state);
    }

    componentDidMount(): void {
        taskStore.addListener(this.onChange);
    }

    componentWillUnmount(): void {
        taskStore.removeListener(this.onChange);
    }

    render (): React.ReactElement<{}> {
      return (
        <div>
            <div className="list-group">
              {this.state.tasks.map((task: TTask): React.ReactElement<{}> => {
                  return <TaskComponent task={task} key={task.get("id")} />;
              }).toArray()}
            </div>
        </div>
      );
    }

    private getStateFromStores (): IState {
       return {
           tasks: taskStore.getState()
       };
    }
}