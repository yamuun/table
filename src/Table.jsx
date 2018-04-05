/* @flow */
import * as React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';

type Props = {
  data: [],
  columns: [],
  loading: boolean,
};

export default function Table(props: Props) {
  const {data, columns, loading} = props;

  return (
    <div className="gc__table">
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        showPaginationBottom={false}
        className="-striped -highlight"
        loading={loading}
        NoDataComponent={() => {
          if (loading) {
            return null;
          }
          return <NoData />;
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
