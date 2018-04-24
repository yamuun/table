/* @flow */
import {compose, setDisplayName, lifecycle} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('RemoteDataStories'),
  lifecycle({
    componentDidMount() {
      const {getFruits, getCartList, updateIsTableLoading} = this.props;

      // フルーツ一覧を取得
      (async () => {
        updateIsTableLoading(true);
        await getFruits();
        updateIsTableLoading(false);
      })();

      // カートリストを取得
      getCartList();
    },
  }),
);

export default enhance;
