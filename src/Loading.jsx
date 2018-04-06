/* @flow */
import React from 'react';
import {Loader} from 'semantic-ui-react';

export default function Loading(props: LoadingProps) {
  return (
    <div className="gc__loading">
      <Loader active inline="centered" size="small" />
    </div>
  );
}
