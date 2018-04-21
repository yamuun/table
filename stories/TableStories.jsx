import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table} from '../src';
import {dummyData, dummyProps} from './dummy';
import {Default, Sort, Resize} from './TableColumns';

const TableStories = () => {
  storiesOf('Table', module)
    .addDecorator((story, context) => withInfo('common info')(story)(context))
    .add(
      'default',
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
                current={store.state.current}
                pageSize={store.state.pageSize}
              />
            </div>
          );
        },
      ),
    )
    .add(
      'no outline',
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
                current={store.state.current}
                pageSize={store.state.pageSize}
                outline={false}
              />
            </div>
          );
        },
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
      })(({store}) => {
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
      })(({store}) => {
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
    )
    .add('no activeData', () => (
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
    ))
    .add('no activeData(custom)', () => (
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
    ));
};

export default TableStories;
