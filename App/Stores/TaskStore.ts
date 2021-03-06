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

import Task from "../Models/Task";

/**
 * @note: We export the task list type to provide a unique task list type declaration to be used in components.
 */
export type TTaskList = Immutable.List<Task>;

class Store extends BaseStore {
  private state: TTaskList;

  constructor() {
    super();
    Dispatcher.register((action: IAction) => this.processActions(action));

    // Prepopulate store with fake data
    this.state = Immutable
      .List<Task>()
      .push(new Task(Immutable.fromJS({name: "Task 1", id: UUID.v1()})))
      .push(new Task(Immutable.fromJS({name: "Task 2", id: UUID.v1()})));
  }

  getState(): TTaskList {
    return this.state;
  }

  addTask(taskName: string): void {
    if (!taskName) {
      return;
    }

    // Creation of a new task object
    const task: Task = new Task(Immutable.fromJS({
      name: taskName,
      id: UUID.v1()
    }));

    // Push the task un top of the task list
    this.state = this.state.unshift(task);
  }

  toggleTask(task: Task): void {
    this.state = this.state.map((current: Task) => {
      if (current === task) {
        current = current.set("completedOn", current.completedOn ? null : new Date());
      }

      return current;
    }).toList();
  }

  deleteTask(task: Task): void {
    this.state = this.state.filter((current: Task) => {
      return current !== task;
    }).toList();
  }

  deleteAllTasks(): void {
    this.state = this.state.clear();
  }
  /**
   * Catch actions base on the instanceof dispatched actions and trigger class methods if needed
   */
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
