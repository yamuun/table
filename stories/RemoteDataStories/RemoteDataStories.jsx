/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table, makeLocalActiveData} from '../src';
import {dummyData, dummyProps} from './dummy';
import {Default} from './TableColumns';

const RemoteDataStories = () => {
  storiesOf('Remote data', module)
    .addDecorator((story, context) => withInfo('common info')(story)(context))
    .add(
      'default',
      withState({
        activeData: makeLocalActiveData(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(({store}) => {
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
      }),
    )
    .add(
      'change page size',
      withState({
        activeData: makeLocalActiveData(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(({store}) => {
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
              showSizeChanger
              updatePageSize={(current: number, pageSize: number) => {
                store.set({current: 1});
                store.set({pageSize});
                const nextActiveData = makeLocalActiveData(
                  dummyData,
                  1,
                  pageSize,
                );
                store.set({activeData: nextActiveData});
              }}
            />
          </div>
        );
      }),
    )
    .add(
      'sort(coming soon...)',
      withState({
        activeData: makeLocalActiveData(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(({store}) => {
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
              showSizeChanger
              updatePageSize={(current: number, pageSize: number) => {
                store.set({current: 1});
                store.set({pageSize});
                const nextActiveData = makeLocalActiveData(
                  dummyData,
                  1,
                  pageSize,
                );
                store.set({activeData: nextActiveData});
              }}
            />
          </div>
        );
      }),
    );
};

export default LocalDataStories;
