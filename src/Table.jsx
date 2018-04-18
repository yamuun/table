/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';
import Column from './Column';
import {Pagination} from '@gemcook/pagination';
import enhance from './enhancer';

import 'react-table/react-table.css';

function Table(props: TableProps) {
  const {
    data = [],
    columns = [],
    loading,
    sortState,
    updateSortState,
    noDataMessage,
    outline,
    currentPage,
  } = props;

  return (
    <React.Fragment>
      <div
        className="gc__table"
        style={{
          boxShadow: outline !== false ? '0 0 30px #e9ecef' : 'none',
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
      <div>
        <Pagination current={currentPage} total={100} />
      </div>
    </React.Fragment>
  );
}

export default enhance(props => <Table {...props} />);
