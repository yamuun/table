/* @flow */
import {compose, withState, setDisplayName} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('Table'),
  withState('currentPage', 'updateCurrentPage', 1),
);

export default enhance;
