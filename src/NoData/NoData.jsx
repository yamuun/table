/* @flow */
import React from 'react';
import type {Props} from './type';

export default function NoData(props: Props) {
  return <div className="gc__nodata">{props.noDataMessage}</div>;
}
