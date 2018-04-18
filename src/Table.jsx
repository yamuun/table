/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';
import Column from './Column';
import classNames from 'classnames';
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
    current,
    pagination,
    updateCurrent,
    paginationPosition,
  } = props;

  return (
    <div className="gc__table">
      <div
        className={classNames({
          b__table: true,
          outline: outline === true || outline === undefined,
        })}>
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
              <NoData noDataMessage={noDataMessage || 'Data does not exist'} />
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
      <div
        className={classNames({
          b__pagination: true,
          hidden: pagination === false || pagination === undefined,
          left: paginationPosition === 'left',
          center: paginationPosition === 'center',
        })}>
        <Pagination
          current={current}
          total={data.length}
          changePage={current => {
            updateCurrent(current);
          }}
        />
      </div>
    </div>
  );
}

export default enhance(props => <Table {...props} />);
