import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table} from '../src';
import {dummyData, dummyProps} from './dummy';
import {Default} from './TableColumns';

const TablePaginationLocalStories = () => {
  storiesOf('Table & Pagination(local)', module)
    .addDecorator((story, context) => withInfo('common info')(story)(context))
    .add(
      'default',
      withState({data: dummyData})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
              pagination
            />
          </div>
        );
      }),
    )
    .add(
      'position center',
      withState({data: dummyData})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
              pagination
              paginationPosition="center"
            />
          </div>
        );
      }),
    )
    .add(
      'position left',
      withState({data: dummyData})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
              pagination
              paginationPosition="left"
            />
          </div>
        );
      }),
    )
    .add(
      'change page size',
      withState({data: dummyData, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
              pageSize={store.state.pageSize}
              pagination
              showSizeChanger
            />
          </div>
        );
      }),
    );
};

export default TablePaginationLocalStories;
