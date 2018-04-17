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
      sortable: false,
      resizable: true,
    },
    {
      Header: '果物名',
      accessor: 'name',
      sortable: false,
      resizable: true,
    },
    {
      Header: '価格',
      accessor: 'price',
      sortable: false,
      resizable: true,
      Cell: (row: Row) => {
        return <div>{`¥ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: '生産地',
      accessor: 'prefectures',
      sortable: false,
      resizable: true,
    },
  ];
}
