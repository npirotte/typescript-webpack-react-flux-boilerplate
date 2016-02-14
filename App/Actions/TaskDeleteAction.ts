import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";
import {TTask} from "../Stores/TaskStore";

export default class TaskDeleteAction implements IAction {
  /**
   * Name of the new task to be created
   */
  task: TTask;

  constructor(task: TTask) {
    this.task = task;
  }

  toLogEntry(): ActionLogEntry {
    return new ActionLogEntry("TaskDeleteAction", {name: JSON.stringify(this.task)});
  }
}
