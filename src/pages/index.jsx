/**
 * title: page.index.title
 */
import React from 'react';
// import { formatMessage } from 'umi-plugin-react/locale';
import { inject, observer } from 'mobx-react';

import TodoList from '@/components/TodoList';

import styles from './index.less';

Index.propTypes = {};

Index.defaultProps = {};

@inject(({ stores }) => ({ TodoStore: stores.TodoStore }))
@observer
class Index extends React.Component {
  render() {
    const that = this;
    const { TodoStore } = that.props;

    return (
      <div className={styles.container}>
        <TodoList todoStore={TodoStore} />
      </div>
    );
  }
}

export default Index;
