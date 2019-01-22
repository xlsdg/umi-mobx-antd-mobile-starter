/**
 * title: page.index.title
 */
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import ReactDocumentTitle from 'react-document-title';
import { inject, observer } from 'mobx-react';

import TodoList from '@/components/TodoList';

import styles from './index.less';

@inject(({ stores }) => ({ TodoStore: stores.TodoStore }))
@observer
class App extends React.Component {
  render() {
    const that = this;
    const { TodoStore } = that.props;

    return (
      <ReactDocumentTitle title={formatMessage({ id: 'page.index.title' })}>
        <div className={styles.main}>
          <TodoList todoStore={TodoStore} />
        </div>
      </ReactDocumentTitle>
    );
  }
}

export default App;
