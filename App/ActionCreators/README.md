# ActionCreators

ActionCreators are singleton classes used by Component to create and dispatch actions.

Here a example of a classic ActionCreator :

```javascript
class TaskActionCreator {
  add(name: string): void {
    Dispatcher.dispatch(new TaskAddAction(name));
  }

  toggle(task: Task): void {
    Dispatcher.dispatch(new TaskToggleAction(task));
  }

  delete(task: Task): void {
    Dispatcher.dispatch(new TaskDeleteAction(task));
  }

  deleteAll(): void {
    Dispatcher.dispatch(new TaskDeleteAllAction());
  }
}
```
