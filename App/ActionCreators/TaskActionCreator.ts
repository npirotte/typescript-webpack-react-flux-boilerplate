import Dispatcher from "../Dispatcher/Dispatcher";
import TaskAddAction from "../Actions/TaskAddAction";
import TaskToggleAction from "../Actions/TaskToggleAction";
import TaskDeleteAction from "../Actions/TaskDeleteAction";
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
}

export default new TaskActionCreator();
