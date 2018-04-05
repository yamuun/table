/* @flow */
export default {
  onSizePerPageChange: (sizePerPage: number, page: any) => {
    console.log('Newest page:' + page);
  },
  onPageChange: (page: any, sizePerPage: number) => {
    console.log('Newest page:' + page);
  },
  paginationSize: 4,
  pageStartIndex: 1,

  // Always show next and previous button
  // alwaysShowAllBtns: true,

  // Hide the going to First and Last page button
  withFirstAndLast: true,

  // Hide the sizePerPage dropdown always
  hideSizePerPage: true,

  // Hide the pagination list when only one page
  // hidePageListOnlyOnePage: true,

  firstPageText: '<<',
  prePageText: '<',
  nextPageText: '>',
  lastPageText: '>>',
};
