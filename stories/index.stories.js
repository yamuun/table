import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {Welcome} from '@storybook/react/demo';
import {withState} from '@dump247/storybook-state';
import {Table} from '../src';
import {dummyData, dummyProps} from './dummy';
import {Default, Sort, Resize} from './TableColumns';

import './../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

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
  );

storiesOf('Table & Pagination(remote)', module);
