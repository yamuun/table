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
      withState({data: dummyData, current: 1, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
              current={store.state.current}
              pageSize={store.state.pageSize}
            />
          </div>
        );
      }),
    )
    .add(
      'no outline',
      withState({data: dummyData, current: 1, pageSize: 10})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
              current={store.state.current}
              pageSize={store.state.pageSize}
              outline={false}
            />
          </div>
        );
      }),
    )
    .add(
      'sort',
      withState({
        data: dummyData,
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
              data={store.state.data}
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
        data: dummyData,
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
              data={store.state.data}
              columns={Resize(dummyProps)}
              current={store.state.current}
              pageSize={store.state.pageSize}
            />
          </div>
        );
      }),
    )
    .add('no data', () => (
      <div
        style={{
          padding: '50px',
        }}>
        <Table
          data={[]}
          columns={Default(dummyProps)}
          current={1}
          pageSize={10}
        />
      </div>
    ))
    .add('no data(custom message)', () => (
      <div
        style={{
          padding: '50px',
        }}>
        <Table
          noDataMessage="データが存在しません"
          data={[]}
          columns={Default(dummyProps)}
          current={1}
          pageSize={10}
        />
      </div>
    ));
};

export default TableStories;
