/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';
import Column from './Column';
import 'react-table/react-table.css';
import './styles/index.scss';

export default function Table(props: TableProps) {
  const {
    data = [],
    columns = [],
    loading,
    sortState,
    updateSortState,
    noDataMessage,
    isNoOutline,
  } = props;

  return (
    <div
      className="gc__table"
      style={{
        boxShadow: isNoOutline ? 'none' : '0 0 30px #e9ecef',
      }}>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        showPaginationBottom={false}
        className="-striped -highlight"
        loading={loading}
        ThComponent={e => {
          return (
            <Column
              {...e}
              columns={columns}
              sortState={sortState}
              updateSortState={updateSortState}
            />
          );
        }}
        NoDataComponent={() => {
          if (loading) {
            return null;
          }
          return (
            <NoData noDataMessage={noDataMessage || 'データがありません'} />
          );
        }}
        LoadingComponent={() => {
          if (loading) {
            return <Loading />;
          }
          return null;
        }}
      />
    </div>
  );
}
