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

| **Parameter**      | **Type**                                    | **Required** | **Default**         | **Description**    |
| :----------------- | :------------------------------------------ | :----------- | :------------------ | :----------------- |
| activeData         | [any]                                       | true         | undefined           | \-                 |
| columns            | ReactElement                                | true         | undefined           | \-                 |
| pageSize           | number                                      | true         | undefined           | \-                 |
| current            | number                                      | true         | undefined           | \-                 |
| total              | number                                      | true         | undefined           | \-                 |
| updateCurrent      | (current: number) => void                   | true         | undefined           | \-                 |
| updatePageSize     | (current: number, pageSize: number) => void | false        | undefined           | \-                 |
| updateSortState    | (sortState: object) => void                 | flase        | undefined           | \-                 |
| sortState          | {key: string, order: enum}                  | false        | undefined           | Enum: `asc` `desc` |
| noDataMessage      | string                                      | false        | Data does not exist | \-                 |
| outline            | boolean                                     | false        | true                | \-                 |
| showPagination     | boolean                                     | false        | false               | \-                 |
| paginationPosition | string                                      | false        | right               | \-                 |
| showSizeChanger    | boolean                                     | false        | false               | \-                 |

### API

## License

@gemcook/table is released under the MIT license.
