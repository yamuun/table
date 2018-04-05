/* @flow */
import * as React from 'react';

type Props = {};

export default class NoData extends React.Component<Props, *> {
  render() {
    return <div className="gc__nodata">データがありません。</div>;
  }
}
