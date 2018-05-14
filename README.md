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

#### Use 'makeLocalActive' to generate active.

```js
```

### Remote Pagination

## Example

```jsx
```

## Documentaion

### Props

* There are six required items
* For Remote Pagination, there are 8 required items

| **Parameter**      | **Type**                                    | **Required**                           | **Default**           | **Description**                          |
| :----------------- | :------------------------------------------ | :------------------------------------- | :-------------------- | :--------------------------------------- |
| active             | [any]                                       | true                                   | undefined             | Data displayed in the table              |
| columns            | ReactElement                                | true                                   | undefined             | Table columns                            |
| current            | number                                      | true                                   | undefined             | Current page number                      |
| totalCount         | number                                      | true                                   | undefined             | Maximum number of all data               |
| totalPages         | number                                      | true                                   | undefined             | Maximum number of pages (use pagination) |
| updateCurrent      | (current: number) => void                   | true                                   | undefined             | \-                                       |
| loading            | boolean                                     | false (Required for remote pagination) | false                 | \-                                       |
| disabled           | boolean                                     | false (Required for remote pagination) | false                 | Set 'pagination' to disabled             |
| sortState          | {key: string, order: enum}                  | false                                  | undefined             | Enum: `asc` `desc`                       |
| updateSortState    | (sortState: object) => void                 | flase                                  | undefined             | \-                                       |
| pageSize           | number                                      | false                                  | 10                    | Number of rows in table                  |
| updatePageSize     | (current: number, pageSize: number) => void | false                                  | undefined             | \-                                       |
| noDataMessage      | string                                      | false                                  | 'Data does not exist' | \-                                       |
| outline            | boolean                                     | false                                  | true                  | Whether to display the outer frame       |
| showPagination     | boolean                                     | false                                  | true                  | Whether to display pagination-           |
| paginationPosition | string                                      | false                                  | right                 | Position of placement of pagination      |
| showSizeChanger    | boolean                                     | false                                  | false                 | \-                                       |
| scrollTop          | boolean                                     | false                                  | false                 | \-                                       |

### Override Styles

```scss
$table-main-color: #fa6681 !default;
$table-bg-color: white !default;
$table-sort-default-color: #808b97 !default;
$table-thead-border-color: #e9ecef !default;
$table-th-text-color: #7d7d7d !default;
$table-td-text-color: #7d7d7d !default;
$table-nodata-text-color: #404b69 !default;
```

### API

#### pagination integration

Confirm the API of pagination from this link.

* https://github.com/gemcook/pagination

## License

@gemcook/table is released under the MIT license.
