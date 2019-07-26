/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import {NoData} from './NoData';
import {Loading} from './Loading';
import {Column} from './Column';
import classNames from 'classnames';
import {Pagination} from '@gemcook/pagination';
import enhance from './enhancer';

import 'react-table/react-table.css';

type Props = {
  active: [] | Array<*>,
  columns:
    | [
        {
          Header: string,
          accessor: string,
          resizable: boolean,
          sortable: boolean,
        }
      ]
    | Array<*>,
  loading: boolean,
  sortState: {},
  updateSortState: () => void,
  noDataMessage: string,
  outline: boolean,
  current: number,
  updateCurrent: (current: number) => void,
  pageSize: number,
  showPagination: boolean,
  paginationPosition: string,
  showSizeChanger: boolean,
  updatePageSize: (current: number, pageSize: number) => void,
  pageSizeOptions: [string],
  totalCount: number,
  disabled: boolean,
  scrollTop: boolean,
};

const defaultPageSize = 10;

function Table(props: Props) {
  const {
    active = [],
    columns = [],
    loading,
    sortState,
    updateSortState,
    noDataMessage,
    outline,
    current,
    showPagination,
    totalCount,
    updateCurrent,
    paginationPosition,
    pageSize,
    showSizeChanger,
    updatePageSize,
    disabled,
    scrollTop,
  } = props;

  return (
    <div className="gc__table">
      <div
        className={classNames({
          b__table: true,
          outline: outline === true || outline === undefined,
        })}
      >
        <ReactTable
          data={active}
          columns={columns}
          pageSize={pageSize || defaultPageSize}
          showPaginationBottom={false}
          className="-striped -highlight"
          loading={loading}
          ThComponent={e => {
            return (
              <Column
                {...e}
                active={active}
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
              <NoData noDataMessage={noDataMessage || 'データが存在しません'} />
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
          hidden: showPagination === false,
          left: paginationPosition === 'left',
          center: paginationPosition === 'center',
        })}
      >
        <Pagination
          totalCount={totalCount}
          current={current}
          pageSize={pageSize || defaultPageSize}
          changePage={(current: number) => {
            updateCurrent(current);
          }}
          disabled={disabled}
          showSizeChanger={showSizeChanger}
          changePageSize={(current: number, pageSize: number) => {
            updatePageSize(current, pageSize);
          }}
          scrollTop={scrollTop}
        />
      </div>
    </div>
  );
}

export default enhance(props => <Table {...props} />);
