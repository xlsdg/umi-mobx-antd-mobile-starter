import React from 'react';
import { observer } from 'mobx-react';
import { Checkbox } from 'antd-mobile';

const Todo = observer(({ todo }) => (
  <li>
    <Checkbox type="checkbox" checked={todo.finished} onChange={e => todo.toggle(e.target.checked)} />
    {todo.title}
  </li>
));

export default Todo;
