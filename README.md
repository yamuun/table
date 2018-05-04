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

### SCSS

#### Import `@gemcook/table/lib/styles/index.scss` to your SCSS.

```scss
@import "~@gemcook/table/lib/styles/index";
```

### Local Pagination

#### Use 'makeLocalActiveData' to generate active.

```js
```

### Remote Pagination

## Example

```jsx
```

## Documentaion

### Props

| **Parameter**      | **Type**                                    | **Required** | **Default**           | **Description**    |
| :----------------- | :------------------------------------------ | :----------- | :-------------------- | :----------------- |
| active         | [any]                                       | true         | undefined             |       Data displayed in the table           |
| columns            | ReactElement                                | true         | undefined             | Table columns                 |
| pageSize           | number                                      | true         | undefined             | Number of rows in table                 |
| current            | number                                      | true         | undefined             | Current page number                 |
| total              | number                                      | true         | undefined             | Maximum number of data                 |
| updateCurrent      | (current: number) => void                   | true         | undefined             | \-                 |
| updatePageSize     | (current: number, pageSize: number) => void | false        | undefined             | \-                 |
| updateSortState    | (sortState: object) => void                 | flase        | undefined             | \-                 |
| sortState          | {key: string, order: enum}                  | false        | undefined             | Enum: `asc` `desc` |
| noDataMessage      | string                                      | false        | 'Data does not exist' | \-                 |
| outline            | boolean                                     | false        | true                  | Whether to display the outer frame                 |
| showPagination     | boolean                                     | false        | false                 | Whether to display pagination-                 |
| paginationPosition | string                                      | false        | right                 | Position of placement of pagination                 |
| showSizeChanger    | boolean                                     | false        | false                 | \-                 |
| scrollTop          | boolean                                     | false        | false                 | \-                 |
| loading          | boolean                                     | false (Required for remote pagination)        | false                  |                  |

### API

#### pagination integration

Confirm the API of pagination from this link.

* https://github.com/gemcook/pagination

## License

@gemcook/table is released under the MIT license.
