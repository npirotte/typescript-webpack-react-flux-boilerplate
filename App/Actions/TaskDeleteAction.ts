import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";
import Task from "../Models/Task";

export default class TaskDeleteAction implements IAction {
  /**
   * Name of the new task to be created
   */
  task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  toLogEntry(): ActionLogEntry {
    return new ActionLogEntry("TaskDeleteAction", {name: JSON.stringify(this.task)});
  }
}
