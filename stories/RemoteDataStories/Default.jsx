/* @flow */
import * as React from 'react';
import {Table} from '../../src';
import {Default as TableColumns} from '../TableColumns';
import {dummyData, dummyProps} from '../dummy';
import enhance from './enhancer';

function Default(props) {
  return (
    <div
      style={{
        padding: '50px',
      }}>
      <Table
        activeData={props.activeData}
        columns={TableColumns(dummyProps)}
        showPagination
        total={dummyData.length}
        current={props.current}
        pageSize={props.pageSize}
        updateCurrent={(current: number) => {
          props.handleActiveData(current);
        }}
      />
    </div>
  );
}

export default enhance(props => <Default {...props} />);
