import React from 'react';
import {Loader} from 'semantic-ui-react';

const Loading: React.FC = () => {
  return (
    <div className="gc__loading">
      <Loader active inline="centered" size="small" />
    </div>
  );
};

export default Loading;
