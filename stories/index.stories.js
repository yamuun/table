import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';

import {Table} from '../src';
import tableData from './mock/Table/data';
import tableProps from './mock/Table/props';
import TableColumns from './mock/TableColumns';

import 'font-awesome/css/font-awesome.css';
import 'semantic-ui-css/semantic.min.css';
import '../lib/base.css';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Table', module)
  .add('no data', () => <Table />)
  .add('fruites', () => (
    <Table data={tableData} columns={TableColumns(tableProps)} />
  ));
