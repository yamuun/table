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
import {makeRemoteActive} from '@gemcook/pagination';

const enhance: HOC<*, *> = compose(
  setDisplayName('RemoteDataStories'),
  withState('current', 'updateCurrent', 1),
  withState('pageSize', 'updatePageSize', 10),
  withState('loading', 'updateLoading', true),
  withState('totalCount', 'updateTotalCount', 0),
  withState('pagesCount', 'updatePagesCount', 0),
  withState('disabledPagination', 'updateDisabledPagination', false),
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
        updateDisabledPagination,
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
      updateDisabledPagination(true);

      makeRemoteActive(
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

      updateDisabledPagination(false);
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {
        updateLoading,
        updateActive,
        updateFirst,
        updateLast,
        updateBeforeDistant,
        updateBeforeNear,
        updateAfterNear,
        updateAfterDistant,
        updateTotalCount,
        updatePagesCount,
        current,
      } = this.props;

      try {
        const fruits = await getFruits(current);

        updateTotalCount(fruits.totalCount);
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
