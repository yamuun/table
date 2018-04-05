/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';

type Props = {
  data: [],
  columns: [],
  loading: boolean,
};

export default function Table(props: Props) {
  return (
    <div className="gc__table">
      <ReactTable
        data={props.data || []}
        columns={props.columns || []}
        defaultPageSize={10}
        showPaginationBottom={false}
        className="-striped -highlight"
        loading={props.loading}
        NoDataComponent={props.loading ? null : <NoData />}
        LoadingComponent={props.loading ? <Loading /> : null}
      />
    </div>
  );
}
