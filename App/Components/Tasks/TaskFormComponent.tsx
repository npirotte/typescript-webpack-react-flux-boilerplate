/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

interface IState {
  name: string;
}

export default class TaskFormComponent extends React.Component<{}, IState> {
  /**
   * Handles for submit and trigger a task add event.
   *
   * @note: Here the usage of lambda expressions () => {} allow us to get rid of the manual context binding in the constructor
   * and thus allow a safer and clearer coding.
   * The private declaration is optionnal an simply prevent the handlers to be used outside of the component itself
   *
   * @note: we use a react synthetic event type interface for typing the event object (e). Be sure to use the correct one !
   */
  private handleSubmit: (e: React.FormEvent) => void = (e: React.FormEvent) => {
    e.preventDefault();

    TaskActionCreator.add(this.state.name);
    /**
     * @note: For react beginers, setState allow to update the state of our component and make him uptade itself.
     */
    this.setState({
      name: null
    });
  };
  /**
   * Handles input change and update the input value internal state for some two way binding.
   */
  private handleChange: (e: React.FormEvent) => void = (e: React.FormEvent) => {
    /**
     * @note: Here we need to force the e.target type as an HTML input element in place of the React eventTarget.
     * For that we use TypeScript "as" keywork, with assing a type to a variable reference
     * and some TypeScript native interface, here the HTMLInputElement.
     */
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setState({
      name: target.value
    });
  };

  constructor() {
    super();
    /**
     * @note: Here is the default component state.
     */
    this.state = {
      name: null
    };
  }

  render(): React.ReactElement<{}> {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="task"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Add a new task" />
        </form>
      </div>
    );
  }
}
