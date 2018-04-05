/* @flow */
import React from 'react';
import {Loader} from 'semantic-ui-react';

type Props = {};

export default class Loading extends React.Component<Props, *> {
  render() {
    return (
      <div className="gc__loading">
        <Loader active inline="centered" size="mini" />
      </div>
    );
  }
}
