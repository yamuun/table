import React from 'react';

import {NoDataProps} from './types';

const NoData: React.FC<NoDataProps> = props => {
  return <div className="gc__nodata">{props.noDataMessage}</div>;
};

export default NoData;
