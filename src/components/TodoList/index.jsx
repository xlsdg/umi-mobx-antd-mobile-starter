import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { List, InputItem, Button } from 'antd-mobile';

import Todo from '@/components/Todo';

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = '';

  handleChange = value => {
    const that = this;
    that.newTodoTitle = value;
  };

  handleNewTodoClick = e => {
    const that = this;
    e.stopPropagation();
    that.props.todoStore.addTodo(that.newTodoTitle);
    that.newTodoTitle = '';
  };

  render() {
    const that = this;
    const { todoStore } = that.props;

    return (
      <div>
        <List renderHeader={() => 'Todo'}>
          <InputItem value={that.newTodoTitle} onChange={that.handleChange} />
        </List>
        <Button onClick={that.handleNewTodoClick}>Add</Button>
        <ul>
          {todoStore.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {todoStore.unfinishedTodoCount}
      </div>
    );
  }
}

export default TodoList;
