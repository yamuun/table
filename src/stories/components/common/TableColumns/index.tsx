import React from 'react';
import {Checkbox} from 'semantic-ui-react';

import {InputProps, Row} from './types';

export const Default = () => {
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
};

export const Input = (props: InputProps) => {
  return [
    {
      Header: '',
      accessor: 'checkbox',
      sortable: false,
      resizable: false,
      width: 30,
      Cell: (row: Row) => {
        if (!props.fruits) {
          return null;
        }

        return (
          <span>
            <Checkbox
              disabled
              checked={`${row.original.id}` in props.fruits.selectedList}
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
};

export const Resize = () => {
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
};

export const Sort = () => {
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
};
