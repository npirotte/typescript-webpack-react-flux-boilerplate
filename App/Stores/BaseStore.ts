/// <reference path="../../typings/tsd.d.ts" />

/**
 * Abstract class for creating stores.
 * This class provides all methods to handle pub/sub and change dispatching on the instances of the stores.
 */
export default class BaseStore {

  private listeners: Array<() => void> = null;

  constructor() {
    this.listeners = [];
  }

  addListener(listener: () => void): void {
    this.listeners.push(listener);
  }

  removeListener(listener: () => void): void {
    var index: number = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  protected emitChange(): void {
    for (var i: number = 0; i < this.listeners.length; i++) {
      this.listeners[i]();
    }
  }
}
