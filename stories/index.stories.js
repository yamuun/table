/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import {TableStories} from './TableStories';
import {LocalDataStories} from './LocalDataStories';
import {RemoteDataStories} from './RemoteDataStories';

import './../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

TableStories();
LocalDataStories();
RemoteDataStories();
