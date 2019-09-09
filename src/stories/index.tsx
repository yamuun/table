import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Button, Welcome} from '@storybook/react/demo';
import {makeLocalActive} from '@gemcook/pagination';
import {withState} from '@dump247/storybook-state';

import {Table} from '../';
import {TableColumns} from './components/common';
import data from './data';

import '@gemcook/pagination/lib/styles/index.scss';
import '../styles/index.scss';

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

storiesOf('Table - local data', module).add(
  'default',
  withState({
    active: makeLocalActive(data.dummy.data, 1, 10),
    current: 1,
    pageSize: 10,
  })(props => (
    <div
      style={{
        padding: '50px',
      }}
    >
      <Table
        active={props.store.state.active}
        columns={TableColumns.Default()}
        current={props.store.state.current}
        totalCount={data.dummy.data.length}
        loading={false}
        updateCurrent={(current: number) => {
          props.store.set({current});
          const nextActiveData = makeLocalActive(
            data.dummy.data,
            current,
            props.store.state.pageSize
          );
          props.store.set({active: nextActiveData});
        }}
        disabled={false}
      />
    </div>
  ))
);
