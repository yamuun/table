/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table} from '../../src';
import {makeLocalActiveData} from '@gemcook/pagination';
import {dummyData, dummyProps} from '../dummy';
import {Default, Sort, Resize} from '../TableColumns';

const TableStories = () => {
  storiesOf('Table', module)
    .add(
      'default',
      withState({activeData: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Default(dummyProps)}
                current={store.state.current}
                pageSize={store.state.pageSize}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'no outline',
      withState({activeData: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Default(dummyProps)}
                current={store.state.current}
                pageSize={store.state.pageSize}
                outline={false}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'loading',
      withState({activeData: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                loading={true}
                activeData={store.state.activeData}
                columns={Default(dummyProps)}
                current={store.state.current}
                pageSize={store.state.pageSize}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'sort',
      withState({
        activeData: dummyData,
        sortState: {
          key: 'id',
          order: 'desc',
        },
        current: 1,
        pageSize: 10,
      })(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Sort(dummyProps)}
                current={store.state.current}
                pageSize={store.state.pageSize}
                sortState={store.state.sortState}
                updateSortState={sortState => {
                  store.set({
                    sortState,
                  });
                }}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'resize',
      withState({
        activeData: dummyData,
        sortState: {
          key: 'id',
          order: 'desc',
        },
        current: 1,
        pageSize: 10,
      })(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Resize(dummyProps)}
                current={store.state.current}
                pageSize={store.state.pageSize}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'no activeData',
      withInfo(`Table Information`)(() => (
        <div
          style={{
            padding: '50px',
          }}>
          <Table
            activeData={[]}
            columns={Default(dummyProps)}
            current={1}
            pageSize={10}
          />
        </div>
      )),
    )
    .add('no activeData (custom)', () => (
      <div
        style={{
          padding: '50px',
        }}>
        <Table
          noDataMessage="データが存在しません"
          activeData={[]}
          columns={Default(dummyProps)}
          current={1}
          pageSize={10}
        />
      </div>
    ))
    .add(
      'pagination (position default)',
      withState({activeData: dummyData, current: 1, pageSize: 10})(
        ({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Default(dummyProps)}
                showPagination
                total={dummyData.length}
                current={store.state.current}
                pageSize={store.state.pageSize}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActiveData(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({activeData: nextActiveData});
                }}
              />
            </div>
          );
        },
      ),
    )
    .add(
      'pagination (position center)',
      withState({activeData: dummyData, current: 1, pageSize: 10})(
        ({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Default(dummyProps)}
                showPagination
                total={dummyData.length}
                current={store.state.current}
                pageSize={store.state.pageSize}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActiveData(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({activeData: nextActiveData});
                }}
                paginationPosition="center"
              />
            </div>
          );
        },
      ),
    )
    .add(
      'pagination (position left)',
      withState({activeData: dummyData, current: 1, pageSize: 10})(
        ({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                activeData={store.state.activeData}
                columns={Default(dummyProps)}
                showPagination
                total={dummyData.length}
                current={store.state.current}
                pageSize={store.state.pageSize}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActiveData(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({activeData: nextActiveData});
                }}
                paginationPosition="left"
              />
            </div>
          );
        },
      ),
    );
};

export default TableStories;
