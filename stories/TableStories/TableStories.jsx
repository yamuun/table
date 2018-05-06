/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table} from '../../src';
import {makeLocalActive} from '@gemcook/pagination';
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
                totalCount={store.state.active.length}
                columns={Default(dummyProps)}
                current={store.state.current}
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
                totalCount={store.state.active.length}
                columns={Default(dummyProps)}
                current={store.state.current}
                outline={false}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'hidden pagination',
      withState({active: dummyData, current: 1, pageSize: 10})(
        withInfo(`Table Information`)(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
                totalCount={store.state.active.length}
                columns={Default(dummyProps)}
                current={store.state.current}
                showPagination={false}                
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
                totalCount={store.state.active.length}
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
                totalCount={store.state.active.length}
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
                totalCount={store.state.active.length}
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
            totalCount={0}
          />
        </div>
      )),
    )
    .add('no active (custom)', 
      withInfo(`Table Information`)(() => (
      <div
        style={{
          padding: '50px',
        }}>
        <Table
          noDataMessage="Data does not exist"
          active={[]}
          totalCount={0}
          columns={Default(dummyProps)}
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
                totalCount={dummyData.length}
                pageSize={store.state.pageSize}
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
                totalCount={dummyData.length}
                current={store.state.current}
                paginationPosition="center"
              />
            </div>
          );
        },
      ),
    ))
    .add(
      'pagination (position left)',
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
                totalCount={dummyData.length}
                current={store.state.current}
                paginationPosition="left"
              />
            </div>
          );
        },
      ),
    ))
};

export default TableStories;
