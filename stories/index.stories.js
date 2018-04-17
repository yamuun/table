import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {Welcome} from '@storybook/react/demo';
import {Table} from '../src';
import {dummyData, dummyProps} from './dummy';
import {Default} from './TableColumns';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Table', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('default', () => (
    <Table data={dummyData} columns={Default(dummyProps)} />
  ))
  .add('no data', () => <Table data={[]} columns={Default(dummyProps)} />)
  .add('no data(custom message)', () => (
    <Table
      noDataMessage="アイテムはありません。"
      data={[]}
      columns={Default(dummyProps)}
    />
  ));
