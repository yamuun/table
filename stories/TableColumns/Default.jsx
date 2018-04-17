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
    },
    {
      Header: '果物名',
      accessor: 'name',
    },
    {
      Header: '価格',
      accessor: 'price',
      Cell: (row: Row) => {
        return <div>{`¥ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: '生産地',
      accessor: 'prefectures',
    },
  ];
}
