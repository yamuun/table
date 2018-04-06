/* @flow */
import * as React from 'react';
import {Checkbox} from 'semantic-ui-react';

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
      Header: '',
      accessor: 'checkbox',
      sortable: false,
      resizable: false,
      width: 30,
      Cell: (row: Row) => {
        const {fruits} = props;
        return (
          <span>
            <Checkbox
              disabled
              checked={`${row.original.id}` in fruits.selectedList}
            />
          </span>
        );
      },
    },
    {
      Header: '果物ID',
      width: 100,
      sortable: true,
      accessor: 'id', // String-based value accessors!
    },
    {
      Header: '果物名',
      sortable: true,
      accessor: 'name', // String-based value accessors!
    },
    {
      Header: '価格',
      sortable: true,
      accessor: 'price',
      Cell: (row: Row) => {
        return <div>{`¥ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: '生産地',
      sortable: true,
      accessor: 'prefectures',
    },
    {
      Header: '数量',
      accessor: 'num',
      resizable: false,
      sortable: false,
      width: 80,

      Cell: (row: Row) => {
        const {updateSelectedList, fruits} = props;

        return (
          <input
            type="number"
            style={{width: '100%'}}
            value={
              `${row.original.id}` in fruits.selectedList
                ? fruits.selectedList[row.original.id].num
                : ''
            }
            onChange={e => {
              row.original.num = Number(e.target.value);
              updateSelectedList(row.original);
            }}
          />
        );
      },
    },
    {
      Header: 'カートに追加',
      accessor: 'cart',
      width: 150,
      sortable: false,
      resizable: false,
      Cell: (row: Row) => {
        const {addCartList, removeTargetNum, fruits} = props;

        return (
          <button
            style={{width: '100%'}}
            disabled={!(`${row.original.id}` in fruits.selectedList)}
            onClick={e => {
              addCartList(fruits.selectedList[row.original.id]);
              removeTargetNum(row.original);
            }}>
            カートに入れる
          </button>
        );
      },
    },
  ];
}
