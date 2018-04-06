/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';
import Column from './Column';

import 'react-table/react-table.css';

type Props = {
  data: [] | Array<*>,
  columns: [] | Array<*>,
  loading: boolean,
  sortState: {},
  updateSort: () => void,
  noDataMessage: string,
};

export default function Table(props: Props) {
  const {
    data = [],
    columns = [],
    loading,
    sortState,
    updateSort,
    noDataMessage,
  } = props;

  return (
    <div className="gc__table">
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
              updateSort={updateSort}
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
