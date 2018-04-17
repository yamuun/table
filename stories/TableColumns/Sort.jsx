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
      Header: '果物ID',
      accessor: 'id',
      sortable: true,
      resizable: false,
    },
    {
      Header: '果物名',
      accessor: 'name',
      sortable: true,
      resizable: false,
    },
    {
      Header: '価格',
      accessor: 'price',
      sortable: true,
      resizable: false,
      Cell: (row: Row) => {
        return <div>{`¥ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: '生産地',
      accessor: 'prefectures',
      sortable: true,
      resizable: false,
    },
  ];
}
