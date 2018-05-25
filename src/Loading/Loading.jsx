/* @flow */
import React from 'react';
import {Loader} from 'semantic-ui-react';
type Props = {};

export default function Loading(props: Props) {
  return (
    <div className="gc__loading">
      <Loader active inline="centered" size="small" />
    </div>
  );
}
