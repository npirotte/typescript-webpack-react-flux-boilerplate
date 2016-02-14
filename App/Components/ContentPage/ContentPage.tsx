/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

import TaskListComponent from "../Tasks/TaskListComponent";
import TaskFormComponent from "../Tasks/TaskFormComponent";

interface IContentPageState {
  bodyTitle: string;
  bodySummary: string;
  sayHelloCount: number;
}

export default class ContentPage extends React.Component<{}, IContentPageState> {
  constructor() {
    super();
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>Tasks</h1>
            <TaskFormComponent />
            <TaskListComponent />
          </div>
        </div>
      </div>
    );
  }
}
