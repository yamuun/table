/* @flow */
import {compose, withState, setDisplayName} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('Table'),
  withState('current', 'updateCurrent', 1),
);

export default enhance;
