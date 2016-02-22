/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import Task from "../../Models/Task";
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

/**
 * @note: Interresting thing here. See how we can validate our props with a very fine tuned interface.
 * This is far mush better thant the original React.PropTypes !
 * Furthermore you can also velidate your state the exact same way.
 */
interface IProps {
  task: Task;
  key: string|number;
}

/**
 * @note: React.Component class's typing uses the type script generic type (see the TypeScript doc for more details).
 * Firt parametter is the Props interface, second is the state.
 * As you will see it enhance you component typing by defining interfaces of props and state
 * and thus allow validation for both internal coding and external usage as a jsx tag !
 */
export default class TaskComponent extends React.Component<IProps, {}> {
  /**
   * @note: Here the usage of lambda expressions () => {} allow us to get rid of the manual context binding in the constructor
   * and thus allow a safer and clearer coding.
   * The private declaration is optionnal an simply prevent the handlers to be used outside of the component itself
   */
  private handleToggle: () => void = () => {
    TaskActionCreator.toggle(this.props.task);
  };

  private handlerDelete: () => void = () => {
    TaskActionCreator.delete(this.props.task);
  };

  constructor() {
    super();
    this.handlerDelete = this.handlerDelete.bind(this);
  }
  /**
   * @note: shouldComponentUpdate provide, when used with immutable js,
   * a fine-tuned way to control the rendering of an object after props and state update.
   */
  shouldComponentUpdate(props: IProps): boolean {
    return this.props.task !== props.task;
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="list-group-item">
        <label>
          <input type="checkbox" onChange={this.handleToggle} checked={this.props.task.isCompleted} />
          <strong> {this.props.task.name}</strong>
        </label>
        <button className="pull-right btn btn-xs btn-danger" onClick={this.handlerDelete}>Delete</button>
      </div>
    );
  }
}
