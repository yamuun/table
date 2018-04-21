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
      withState({activeData: dummyData, current: 1, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              activeData={store.state.activeData}
              columns={Default(dummyProps)}
              showPagination
              current={store.state.current}
              pageSize={store.state.pageSize}
              updateCurrent={(current: number) => {
                store.set({current});
              }}
            />
          </div>
        );
      }),
    )
    .add(
      'position center',
      withState({activeData: dummyData, current: 1, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              activeData={store.state.activeData}
              columns={Default(dummyProps)}
              showPagination
              current={store.state.current}
              pageSize={store.state.pageSize}
              updateCurrent={(current: number) => {
                store.set({current});
              }}
              paginationPosition="center"
            />
          </div>
        );
      }),
    )
    .add(
      'position left',
      withState({activeData: dummyData, current: 1, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              activeData={store.state.activeData}
              columns={Default(dummyProps)}
              showPagination
              current={store.state.current}
              pageSize={store.state.pageSize}
              updateCurrent={(current: number) => {
                store.set({current});
              }}
              paginationPosition="left"
            />
          </div>
        );
      }),
    )
    .add(
      'change page size',
      withState({activeData: dummyData, current: 1, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              activeData={store.state.activeData}
              columns={Default(dummyProps)}
              showPagination
              current={store.state.current}
              pageSize={store.state.pageSize}
              updateCurrent={(current: number) => {
                store.set({current});
              }}
              showSizeChanger
              updatePageSize={(current: number, pageSize: number) => {
                store.set({current});
                store.set({pageSize});
              }}
            />
          </div>
        );
      }),
    )
    .add(
      'change page size options',
      withState({activeData: dummyData, current: 1, pageSize: 1})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              activeData={store.state.activeData}
              columns={Default(dummyProps)}
              pageSize={store.state.pageSize}
              showPagination
              current={store.state.current}
              updateCurrent={(current: number) => {
                store.set({current});
              }}
              showSizeChanger
              updatePageSize={(current: number, pageSize: number) => {
                store.set({current});
                store.set({pageSize});
              }}
              pageSizeOptions={['1', '2', '3']}
            />
          </div>
        );
      }),
    );
};

export default TablePaginationLocalStories;
