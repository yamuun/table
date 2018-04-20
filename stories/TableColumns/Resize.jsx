/* @flow */
import * as React from 'react';

type Props = {
  addCartList: ({}) => void,
  updateSelectedList: ({}) => void,
  removeTargetNum: ({}) => void,
  fruits: {
    selectedList: [],
  },
};

type Row = {
  original: {
    id: number,
    num: number,
    price: number,
  },
};

export default function TableColumns(props: Props) {
  return [
    {
      Header: 'ID',
      accessor: 'id',
      sortable: false,
      resizable: true,
    },
    {
      Header: 'Name',
      accessor: 'name',
      sortable: false,
      resizable: true,
    },
    {
      Header: 'Price',
      accessor: 'price',
      sortable: false,
      resizable: true,
      Cell: (row: Row) => {
        return <div>{`$ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: 'Producing area',
      accessor: 'prefectures',
      sortable: false,
      resizable: true,
    },
  ];
}
