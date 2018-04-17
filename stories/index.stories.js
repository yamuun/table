import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {Welcome} from '@storybook/react/demo';
import {withState} from '@dump247/storybook-state';
import {Table} from '../src';
import {dummyData, dummyProps} from './dummy';
import {Default, Sort, Resize} from './TableColumns';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Table', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add(
    'default',
    withState({data: dummyData})(({store}) => {
      return <Table data={store.state.data} columns={Default(dummyProps)} />;
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
        <Table
          data={store.state.data}
          columns={Resize(dummyProps)}
          sortState={store.state.sortState}
        />
      );
    }),
  )
  .add('no data', () => <Table data={[]} columns={Default(dummyProps)} />)
  .add('no data(custom message)', () => (
    <Table
      noDataMessage="アイテムはありません"
      data={[]}
      columns={Default(dummyProps)}
    />
  ));
