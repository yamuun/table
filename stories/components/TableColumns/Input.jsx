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
      Header: 'ID',
      width: 100,
      sortable: true,
      accessor: 'id',
    },
    {
      Header: 'Name',
      sortable: true,
      accessor: 'name',
    },
    {
      Header: 'Price',
      sortable: true,
      accessor: 'price',
      Cell: (row: Row) => {
        return <div>{`$ ${row.original.price.toLocaleString()}`}</div>;
      },
    },
    {
      Header: 'Producing area',
      sortable: true,
      accessor: 'prefectures',
    },
  ];
}
