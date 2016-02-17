/// <reference path="../../typings/tsd.d.ts" />
import Immutable = require("immutable");

export default class Model<K, V> {
  instance: Immutable.Map<K, V>;

  set(key: K, value: V): Model<K, V> {
      return new Model<K, V>(this.instance.set(key, value));
  };

  get(key: K): any {
    return this.instance.get(key);
  }

  constructor(data: any) {
    if (!Immutable.Map.isMap(data)) {
      data = Immutable.fromJS(data);
    }

    this.instance = data;
  }
}
