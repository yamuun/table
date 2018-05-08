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
  disabled: boolean,
};

function Default(props: Props) {
  const {
    current,
    loading,
    totalCount,
    active,
    updateRemotePagination,
    disabled,
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
        disabled={disabled}
      />
    </div>
  );
}

export default enhance(props => <Default {...props} />);
