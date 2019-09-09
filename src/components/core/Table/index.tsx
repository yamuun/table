import React from 'react';
import ReactTable from 'react-table';
import classNames from 'classnames';
import {Pagination} from '@gemcook/pagination';

import Column from '../Column';
import NoData from '../NoData';
import Loading from '../Loading';
import {PAGINATION} from '../../../constants';
import {TableProps} from './types';

const Table: React.FC<TableProps> = props => {
  return (
    <div className="gc__table">
      <div
        className={classNames('b__table', {
          outline: props.outline === true || props.outline === undefined,
        })}
      >
        <ReactTable
          data={props.active}
          columns={props.columns}
          pageSize={props.pageSize || PAGINATION.DEFAULT_PAGESIZE}
          showPaginationBottom={false}
          className="-striped -highlight"
          loading={props.loading}
          ThComponent={e => {
            return (
              <Column
                {...e}
                active={props.active}
                columns={props.columns}
                sortState={props.sortState}
                updateSortState={props.updateSortState}
              />
            );
          }}
          NoDataComponent={() => {
            if (props.loading) {
              return null;
            }
            return (
              <NoData
                noDataMessage={props.noDataMessage || 'データが存在しません'}
              />
            );
          }}
          LoadingComponent={() => {
            if (props.loading) {
              return <Loading />;
            }
            return null;
          }}
        />
      </div>
      <div
        className={classNames('b__pagination', {
          hidden: props.showPagination === false,
          left: props.paginationPosition === 'left',
          center: props.paginationPosition === 'center',
        })}
      >
        <Pagination
          totalCount={props.totalCount}
          current={props.current}
          pageSize={props.pageSize || PAGINATION.DEFAULT_PAGESIZE}
          changePage={current => {
            props.updateCurrent(current);
          }}
          disabled={props.disabled}
          showSizeChanger={props.showSizeChanger}
          {...(props.showSizeChanger && {
            changePageSize: (current, pageSize) => {
              if (props.updatePageSize) {
                props.updatePageSize(current, pageSize);
              }
            },
          })}
          scrollTop={props.scrollTop}
        />
      </div>
    </div>
  );
};

export default Table;
