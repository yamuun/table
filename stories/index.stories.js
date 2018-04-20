import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import TableStories from './TableStories.jsx';
import TablePaginationLocalStories from './TablePaginationLocalStories.jsx';

import './../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

TableStories();
TablePaginationLocalStories();

storiesOf('Table & Pagination(remote)', module);
