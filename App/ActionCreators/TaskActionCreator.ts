import Dispatcher from "../Dispatcher/Dispatcher";
import TaskAddAction from "../Actions/TaskAddAction";
import TaskToggleAction from "../Actions/TaskToggleAction";
import TaskDeleteAction from "../Actions/TaskDeleteAction";
import TaskDeleteAllAction from "../Actions/TaskDeleteAllAction";

import {TTask} from "../Stores/TaskStore";

class TaskActionCreator {
  add(name: string): void {
    Dispatcher.dispatch(new TaskAddAction(name));
  }

  toggle(task: TTask): void {
    Dispatcher.dispatch(new TaskToggleAction(task));
  }

  delete(task: TTask): void {
    Dispatcher.dispatch(new TaskDeleteAction(task));
  }

  deleteAll(): void {
    Dispatcher.dispatch(new TaskDeleteAllAction());
  }
}

export default new TaskActionCreator();
