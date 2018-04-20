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
      withState({data: dummyData})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table data={store.state.data} columns={Default(dummyProps)} />
          </div>
        );
      }),
    )
    .add(
      'no outline',
      withState({data: dummyData})(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Default(dummyProps)}
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
      })(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Sort(dummyProps)}
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
      })(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              columns={Resize(dummyProps)}
              sortState={store.state.sortState}
            />
          </div>
        );
      }),
    )
    .add(
      'page size',
      withState({
        data: dummyData,
      })(({store}) => {
        return (
          <div
            style={{
              padding: '50px',
            }}>
            <Table
              data={store.state.data}
              pageSize={30}
              columns={Default(dummyProps)}
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
        <Table data={[]} columns={Default(dummyProps)} />
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
        />
      </div>
    ));
};

export default TableStories;
