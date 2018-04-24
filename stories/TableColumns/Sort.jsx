/* @flow */
import * as React from 'react';

type Props = {|
  addCartList?: ({}) => void,
  updateSelectedList?: ({}) => void,
  removeTargetNum?: ({}) => void,
  fruits?: {
    selectedList: [],
  },
|};

type Row = {|
  original: {
    id: number,
    num: number,
    price: number,
  },
|};

export default function TableColumns(props: Props) {
  return [
    {
      Header: 'ID',
      accessor: 'id',
      sortable: true,
      resizable: false,
    },
    {
      Header: 'Name',
      accessor: 'name',
      sortable: true,
      resizable: false,
    },
    {
      Header: 'Price',
      accessor: 'price',
      sortable: true,
      resizable: false,
      Cell: (row: Row) => {
        return <div>{`$ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: 'Producing area',
      accessor: 'prefectures',
      sortable: true,
      resizable: false,
    },
  ];
}
