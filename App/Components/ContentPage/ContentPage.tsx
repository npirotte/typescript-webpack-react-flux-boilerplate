/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import TaskListComponent from "../Tasks/TaskListComponent";
import TaskFormComponent from "../Tasks/TaskFormComponent";
import TaskSummaryComponent from "../Tasks/TaskSummaryComponent";

/**
 * This is our master page component.
 */
export default class ContentPage extends React.Component<{}, {}> {
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
            <TaskSummaryComponent />
          </div>
        </div>
      </div>
    );
  }
}
