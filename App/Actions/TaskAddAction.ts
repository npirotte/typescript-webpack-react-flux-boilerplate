import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class TaskAddAction implements IAction {
    /**
     * Name of the new task to be created
     */
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toLogEntry(): ActionLogEntry {
        return new ActionLogEntry("TaskAddAction", {name: this.name});
    }
}
