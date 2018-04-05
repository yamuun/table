/* @flow */
import React from 'react';

type Props = {
  noDataMessage: string,
};

export default function NoData(props: Props) {
  return <div className="gc__nodata">{props.noDataMessage}</div>;
}
