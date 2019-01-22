import { types } from 'mobx-state-tree';

const Todo = types
  .model('Todo', {
    id: types.optional(types.number, () => Math.random()),
    title: types.string,
    finished: false,
  })
  .actions(self => ({
    toggle(res) {
      self.finished = res;
    },
  }));

const TodoStore = types
  .model('TodoStore', {
    todos: types.array(Todo),
  })
  .views(self => ({
    get unfinishedTodoCount() {
      return self.todos.filter(todo => !todo.finished).length;
    },
  }))
  .actions(self => ({
    addTodo(title) {
      self.todos.push({ title });
    },
  }));

export default TodoStore;
