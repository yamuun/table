export type TableProps = {
  active: any[];
  columns: {
    Header: string;
    accessor: string;
    resizable: boolean;
    sortable: boolean;
  }[];
  loading: boolean;
  sortState?: {[key: string]: any};
  updateSortState?: (sortState: any) => void;
  noDataMessage?: string;
  outline?: boolean;
  current: number;
  updateCurrent: (current: number) => void;
  pageSize?: number;
  showPagination?: boolean;
  paginationPosition?: string;
  showSizeChanger?: boolean;
  updatePageSize?: (current: number, pageSize: number) => void;
  pageSizeOptions?: string[];
  totalCount: number;
  disabled: boolean;
  scrollTop?: boolean;
};
