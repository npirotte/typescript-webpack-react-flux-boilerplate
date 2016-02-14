import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class TaskDeleteAllAction implements IAction {
  toLogEntry(): ActionLogEntry {
    return new ActionLogEntry("TaskDeleteAllAction", {});
  }
}
