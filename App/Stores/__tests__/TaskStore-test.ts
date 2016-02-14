import * as TaskStore from "../TaskStore";
import TaskActionCreator from "../../ActionCreators/TaskActionCreator";

describe("TaskStore", function(): void {
  it("Should add a task when trigger TaskAddAction", () => {
    const taskNbr: number = TaskStore.taskStore.getState().size;
    TaskActionCreator.add("Task");
    const newTaskNbr: number = TaskStore.taskStore.getState().size;
    expect(newTaskNbr).toEqual(taskNbr + 1);
  });

  it("Should delete a task when trigger TaskDeleteAction", () => {
    const taskNbr: number = TaskStore.taskStore.getState().size;
    const task: TaskStore.TTask = TaskStore.taskStore.getState().first();
    TaskActionCreator.delete(task);
    const newTaskNbr: number = TaskStore.taskStore.getState().size;
    expect(newTaskNbr).toEqual(taskNbr - 1);
  });

  it("Should delete all tasks when trigger TaskDeleteAllAction", () => {
    TaskActionCreator.add("Task");
    TaskActionCreator.add("Task");
    TaskActionCreator.deleteAll();
    const taskNbr: number = TaskStore.taskStore.getState().size;
    expect(taskNbr).toEqual(0);
  });

  it("Should toggle a task when trigger TaskToggleAction", () => {
    TaskActionCreator.add("Task");
    TaskActionCreator.add("Task");
    const task: TaskStore.TTask = TaskStore.taskStore.getState().first();
    TaskActionCreator.toggle(task);
    const updatedTask: TaskStore.TTask = TaskStore.taskStore.getState().find((item: TaskStore.TTask) => item.get("id") === task.get("id"));

    expect(updatedTask.get("completedOn")).not.toBeUndefined();
    expect(updatedTask.get("completedOn")).not.toBeNull();
  });
});
