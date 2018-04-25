/* @flow */
import {
  compose,
  lifecycle,
  setDisplayName,
  withHandlers,
  withState,
  type HOC,
} from 'recompose';
import {getFruits} from './../../api';
import {makeRemotePagination} from '@gemcook/pagination';
import {Record} from 'immutable';

const enhance: HOC<*, *> = compose(
  setDisplayName('RemoteDataStories'),
  withState('current', 'updateCurrent', 1),
  withState('pageSize', 'updatePageSize', 10),
  withState('loading', 'updateLoading', true),
  withState('total', 'updateTotal', 0),
  withState('pagesCount', 'updatePagesCount', 0),
  withState('active', 'updateActive', []),
  withState('first', 'updateFirst', []),
  withState('last', 'updateLast', []),
  withState('beforeDistant', 'updateBeforeDistant', []),
  withState('beforeNear', 'updateBeforeNear', []),
  withState('afterNear', 'updateAfterNear', []),
  withState('afterDistant', 'updateAfterDistant', []),
  withHandlers({
    updateRemotePagination: props => async (nextCurrent: number) => {
      const {
        active,
        first,
        last,
        beforeDistant,
        beforeNear,
        afterNear,
        afterDistant,
        current,
        updateCurrent,
        pagesCount,
        updateActive,
        updateBeforeDistant,
        updateBeforeNear,
        updateAfterNear,
        updateAfterDistant,
      } = props;

      const pages = {
        active,
        first,
        last,
        beforeDistant,
        beforeNear,
        afterNear,
        afterDistant,
      };

      updateCurrent(nextCurrent);
      makeRemotePagination(
        pages,
        nextCurrent,
        current,
        pagesCount,
        updateActive,
      );

      const fruits = await getFruits(nextCurrent);

      updateActive(fruits.pages.active);
      updateBeforeDistant(fruits.pages.before_distant);
      updateBeforeNear(fruits.pages.before_near);
      updateAfterNear(fruits.pages.after_near);
      updateAfterDistant(fruits.pages.after_distant);
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {
        loading,
        total,
        pagesCount,
        updateLoading,
        updateActive,
        updateFirst,
        updateLast,
        updateBeforeDistant,
        updateBeforeNear,
        updateAfterNear,
        updateAfterDistant,
        updateTotal,
        updatePagesCount,
        current,
      } = this.props;

      try {
        const fruits = await getFruits(current);

        updateTotal(fruits.totalCount);
        updatePagesCount(fruits.pagesCount);

        updateActive(fruits.pages.active);
        updateFirst(fruits.pages.first);
        updateLast(fruits.pages.last);
        updateBeforeDistant(fruits.pages.before_distant);
        updateBeforeNear(fruits.pages.before_near);
        updateAfterNear(fruits.pages.after_near);
        updateAfterDistant(fruits.pages.after_distant);
        updateLoading(false);
      } catch (e) {
        updateLoading(false);
        console.log(e);
      }
    },
  }),
);

export default enhance;
