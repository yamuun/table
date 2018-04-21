# [@gemcook/table](https://table.storybook.gemcook.com)

---

[![npm version](https://badge.fury.io/js/%40gemcook%2Ftable.svg)](https://badge.fury.io/js/%40gemcook%2Ftable)

React Table Component.

## Online Demo

* https://table.storybook.gemcook.com

## Installation

```shell
npm install --save @gemcook/table
```

or

```shell
yarn add @gemcook/table
```

## Usage

```jsx
```

## Documentaion

### Props

| **Parameter**      | **Type**                                    | **Required** | **Default**         | **Description** |
| :----------------- | :------------------------------------------ | :----------- | :------------------ | :-------------- |
| data               | []                                          | true         | undefined           | \-              |
| columns            | ReactElement                                | true         | undefined           | \-              |
| pageSize           | number                                      | true         | undefined           | \-              |
| current            | number                                      | true         | undefined           | \-              |
| outline            | boolean                                     | false        | true                | \-              |
| noDataMessage      | string                                      | false        | Data does not exist | \-              |
| sortState          | {}                                          | false        | undefined           | \-              |
| updateSortState    | (sortState: object) => void                 | flase        | undefined           | \-              |
| showPagination     | boolean                                     | false        | false               | \-              |
| updateCurrent      | (current: number) => void                   | false        | undefined           | \-              |
| updatePageSize     | (current: number, pageSize: number) => void | undefined    | \-                  |
| paginationPosition | string                                      | false        | right               | \-              |
| showSizeChanger    | boolean                                     | false        | false               | \-              |

### API

## License

@gemcook/table is released under the MIT license.
