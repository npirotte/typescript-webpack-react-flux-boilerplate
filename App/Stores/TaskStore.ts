/// <reference path="../../typings/tsd.d.ts" />

import Immutable = require("immutable");
import UUID = require("uuid");

import BaseStore from "./BaseStore";
import Dispatcher from "../Dispatcher/Dispatcher";
import IAction from "../Actions/IAction";

import TaskAddAction from "../Actions/TaskAddAction";
import TaskToggleAction from "../Actions/TaskToggleAction";
import TaskDeleteAction from "../Actions/TaskDeleteAction";
import TaskDeleteAllAction from "../Actions/TaskDeleteAllAction";

export type TTask = Immutable.Map<string, any>
export type TTaskList = Immutable.List<TTask>;

class Store extends BaseStore {
  private state: TTaskList;

  constructor() {
    super();
    Dispatcher.register((action: IAction) => this.processActions(action));

    // Prepopulate store with fake datas
    this.state = Immutable
      .List<TTask>()
      .push(Immutable.fromJS({name: "Task 1", id: UUID.v1()}))
      .push(Immutable.fromJS({name: "Task 2", id: UUID.v1()}));
  }

  getState(): TTaskList {
    return this.state;
  }

  addTask(taskName: string): void {
    if (!taskName) {
      return;
    }

    this.state = this.state.unshift(Immutable.fromJS({name: taskName, id: UUID.v1()}));
  }

  toggleTask(task: TTask): void {
    this.state = this.state.map((current: TTask) => {
      if (current === task) {
        current = current.set("completedOn", current.get("completedOn") ? null : new Date());
      }

      return current;
    }).toList();
  }

  deleteTask(task: TTask): void {
    this.state = this.state.filter((current: TTask) => {
      return current !== task;
    }).toList();
  }

  deleteAllTasks(): void {
    this.state = this.state.clear();
  }

  private processActions(action: IAction): void {
    if (action instanceof TaskAddAction) {
      this.addTask(action.name);
      this.emitChange();
    } else if (action instanceof TaskToggleAction) {
      this.toggleTask(action.task);
      this.emitChange();
    } else if (action instanceof TaskDeleteAction) {
      this.deleteTask(action.task);
      this.emitChange();
    } else if (TaskDeleteAllAction) {
      this.deleteAllTasks();
      this.emitChange();
    }
  }
}

export const taskStore: Store = new Store();
