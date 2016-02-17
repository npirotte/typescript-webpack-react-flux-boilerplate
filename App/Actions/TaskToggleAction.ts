import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";
import Task from "../Models/Task";

export default class TaskToggleAction implements IAction {
  /**
   * Name of the new task to be created
   */
  task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  toLogEntry(): ActionLogEntry {
    return new ActionLogEntry("TaskToggleAction", {name: JSON.stringify(this.task)});
  }
}
