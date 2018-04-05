/* @flow */
import React from 'react';
import ReactTable from 'react-table';
import NoData from './NoData';
import Loading from './Loading';

type Props = {
  data: [],
  columns: [],
  loading: boolean,
};

export default class Table extends React.Component<Props, *> {
  render() {
    return (
      <div className="gc__table">
        <ReactTable
          data={this.props.data}
          columns={this.props.columns}
          defaultPageSize={10}
          showPaginationBottom={false}
          className="-striped -highlight"
          loading={this.props.loading}
          NoDataComponent={this.props.loading ? null : <NoData />}
          LoadingComponent={this.props.loading ? <Loading /> : null}
        />
      </div>
    );
  }
}
