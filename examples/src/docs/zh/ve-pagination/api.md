:::anchor API

### props

| 参数           | 描述                         | 类型     | 可选值                                                | 默认值                                                |
| -------------- | ---------------------------- | -------- | ----------------------------------------------------- | ----------------------------------------------------- |
| layout         | 布局设置                     | `Array`  | ['total', 'prev', 'pager', 'next', 'sizer', 'jumper'] | ['total', 'prev', 'pager', 'next', 'sizer', 'jumper'] |
| total          | 总数量                       | `Number` | -                                                     | -                                                     |
| pageIndex      | 当前页码                     | `Number` | -                                                     | 1                                                     |
| pagingCount    | 前 5 页和后 5 页中间的按钮数 | `Number` | -                                                     | 5                                                     |
| pageSize       | 每页大小                     | `Number` | -                                                     | 10                                                    |
| pageSizeOption | 每页大小下拉配置             | `Array`  | -                                                     | [10, 20, 30]                                          |

### Event

| 事件名称              | 描述             | 回调参数 |
| --------------------- | ---------------- | -------- |
| on-page-number-change | 页码改变回调事件 | 当前页码 |
| on-page-size-change   | 每页大小回调     | 每页大小 |