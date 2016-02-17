/// <reference path="../../typings/tsd.d.ts" />
import Model from "./Model";

export default class Task extends Model<string, any> {
  set(key: string, value: any): Task {
      return new Task(this.instance.set(key, value));
  };

  get name(): string { return this.instance.get("name"); }
  get id(): string { return this.instance.get("id"); }
  get completedOn(): string { return this.instance.get("completedOn"); }
  get isCompleted(): boolean {
    return !!this.instance.get("completedOn");
  }
}
