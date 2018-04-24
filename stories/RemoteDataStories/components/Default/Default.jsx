/* @flow */
import * as React from 'react';
import {Table} from '../../../../src';
import {Default as TableColumns} from '../../../TableColumns';
import {dummyData, dummyProps} from '../../../dummy';
import enhance from './enhancer';

type Props = {
  loading: boolean
}

function Default(props: Props) {
  const {
    current,
    pageSize,
    loading,
    total,
    active,
    updateCurrent,
    updateRemotePagination,
  } = props;

  return (
    <div
      style={{
        padding: '50px',
      }}>
      <Table
        activeData={active}
        columns={TableColumns(dummyProps)}
        showPagination
        total={total}
        loading={loading}
        current={current}
        pageSize={pageSize}
        updateCurrent={updateRemotePagination}
      />
    </div>
  );
}

export default enhance(props => <Default {...props} />);
