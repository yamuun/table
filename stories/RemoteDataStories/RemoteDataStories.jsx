/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Default} from './components';

const RemoteDataStories = () => {
  storiesOf('Remote data', module).add('default', () => <Default />);
};

export default RemoteDataStories;
