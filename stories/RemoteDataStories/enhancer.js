/* @flow */
import {
  compose,
  lifecycle,
  setDisplayName,
  withHandlers,
  withState,
} from 'recompose';
import {makeLocalActiveData} from '../../src';
import {dummyData} from '../dummy';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('RemoteDataStories'),
  withState('current', 'currentUpdater', 1),
  withState('pageSize', 'pageSizeUpdater', 10),
  withState(
    'activeData',
    'activeDataUpdater',
    makeLocalActiveData(dummyData, 1, 10),
  ),
  withHandlers({
    handleActiveData: props => current => {
      props.currentUpdater(current);

      const nextActiveData = makeLocalActiveData(
        dummyData,
        current,
        props.pageSize,
      );

      props.activeDataUpdater(nextActiveData);
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {getFruits, getCartList, updateIsTableLoading} = this.props;

      // フルーツ一覧を取得
      updateIsTableLoading(true);
      await getFruits();
      updateIsTableLoading(false);

      // カートリストを取得
      getCartList();
    },
  }),
);

export default enhance;
