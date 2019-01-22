export function config() {
  return {
    devTools: true,
    mstTools: true,
    initStores: {
      TodoStore: {
        todos: [
          {
            title: 'Get Coffee',
          },
          {
            title: 'Write simpler code',
          },
        ],
      },
    },
  };
}
