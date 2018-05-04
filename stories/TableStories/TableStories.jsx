/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table} from '../../src';
import {makeLocalActiveData} from '@gemcook/pagination';
import {dummyData, dummyProps} from './dummy';
import {Default, Sort, Resize} from '../components/TableColumns';

const TableStories = () => {
  storiesOf('Table UI', module)
    .add(
      'default',
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
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
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
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
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                loading={true}
                active={store.state.active}
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
      'sort (comoing soon...)',
      withState({
        active: dummyData,
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
                active={store.state.active}
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
        active: dummyData,
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
                active={store.state.active}
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
      'no active',
      withInfo(`Table Information`)(() => (
        <div
          style={{
            padding: '50px',
          }}>
          <Table
            active={[]}
            columns={Default(dummyProps)}
            current={1}
            pageSize={10}
          />
        </div>
      )),
    )
    .add('no active (custom)',withInfo(`Table Information`)(() => (
      <div
        style={{
          padding: '50px',
        }}>
        <Table
          noDataMessage="Data does not exist"
          active={[]}
          columns={Default(dummyProps)}
          current={1}
          pageSize={10}
        />
      </div>
    )),
    )
    .add(
      'pagination (position default)',
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(
        ({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
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
                  store.set({active: nextActiveData});
                }}
              />
            </div>
          );
        },
      ),
    ))
    .add(
      'pagination (position center)',
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(
        ({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
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
                  store.set({active: nextActiveData});
                }}
                paginationPosition="center"
              />
            </div>
          );
        },
      ),
    ))
    .add(
      'pagination (scroll top)',
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(
        ({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
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
                  store.set({active: nextActiveData});
                }}
                scrollTop
              />
            </div>
          );
        },
      ),
    ))
};

export default TableStories;
