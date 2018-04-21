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
    activeData = [],
    columns = [],
    loading,
    sortState,
    updateSortState,
    noDataMessage,
    outline,
    current,
    showPagination,
    updateCurrent,
    paginationPosition,
    pageSize,
    showSizeChanger,
    updatePageSize,
    pageSizeOptions,
  } = props;

  return (
    <div className="gc__table">
      <div
        className={classNames({
          b__table: true,
          outline: outline === true || outline === undefined,
        })}>
        <ReactTable
          data={activeData}
          columns={columns}
          pageSize={pageSize}
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
          hidden: showPagination === false || showPagination === undefined,
          left: paginationPosition === 'left',
          center: paginationPosition === 'center',
        })}>
        <Pagination
          total={activeData.length}
          current={current}
          pageSize={pageSize}
          changePage={(current: number) => {
            updateCurrent(current);
          }}
          showSizeChanger={showSizeChanger}
          onShowSizeChange={(current: number, pageSize: number) => {
            updatePageSize(current, pageSize);
          }}
          pageSizeOptions={pageSizeOptions}
        />
      </div>
    </div>
  );
}

export default enhance(props => <Table {...props} />);
