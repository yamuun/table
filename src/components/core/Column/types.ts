import {Column} from 'react-table';

export type ColumnProps = {
  style: {[key: string]: any};
  className: string;
  children: {
    props: {
      style: {[key: string]: any};
      children: string;
    };
  }[];
  sortState: {
    key: string;
    order: string;
  };
  updateSortState: (sortState: {key: any; order: any}) => void;
  columns: Column<any>[];
};
