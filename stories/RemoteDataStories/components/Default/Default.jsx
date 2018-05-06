/* @flow */
import * as React from 'react';
import {Table} from '../../../../src';
import {Default as TableColumns} from '../../../components/TableColumns';
import {dummyProps} from './../../dummy';
import enhance from './enhancer';

type Props = {
  loading: boolean,
  current: number,
  pageSize: number,
  totalCount: number,
  active: [Object],
  updateRemotePagination: any => void,
  disabledPagination: boolean,
};

function Default(props: Props) {
  const {
    current,
    pageSize,
    loading,
    totalCount,
    active,
    updateRemotePagination,
    disabledPagination,
  } = props;

  return (
    <div
      style={{
        padding: '50px',
      }}>
      <Table
        active={active}
        columns={TableColumns(dummyProps)}
        totalCount={totalCount}
        loading={loading}
        current={current}
        updateCurrent={updateRemotePagination}
        disabledPagination={disabledPagination}
      />
    </div>
  );
}

export default enhance(props => <Default {...props} />);
