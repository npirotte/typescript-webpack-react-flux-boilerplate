# Action

Actions are object dispatched by an action creator througth the dispacher and are catched by store.

The actions are used to provide a standard way to format message exanged between components and stores

The actions implement the following interface :

```javascript
interface IAction {
  /**
   * Converts the action to a loggable object.
   */
  toLogEntry(): ActionLogEntry;
}

export default IAction;

```
