export const createColumnDefs = (data) => data.map(el => ({
  headerName: el,
  field: el.toLowerCase(),
  sortable: true,
  filter: true,
  editable: true,
}));


export const getSettings = (props) => ({
  pagination: true,
  paginationPageSize: 10,
  paginationNumberFormatter: ({value}) => value.toLocaleString(),
  enableRowGroup: true,
  enablePivot: true,
  enableValue: true,
  resizable: true,
  ...props,
});
