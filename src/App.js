import React, { Component } from 'react';
import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import Select from './components/Select';
import { createColumnDefs, getSettings } from './utils';

const columns = ['Make', 'Model', 'Price'];
const paginator = { options: [1, 3, 5, 10], selected: 1 };
const columnDefs = createColumnDefs(columns);
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 3200, },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

class App extends Component {
  state = {
    columnDefs,
    rowData
  };

  onGridReady = ({ api, columnApi }) => {
    this.gridAPI = api;
    this.gridColumnAPI = columnApi;
    api.sizeColumnsToFit();
  };

  onRowEditingStarted = (event) => {
    console.log('started', event);
    console.log('never called - not doing row editing');
  };

  onRowEditingStopped = (event) => {
    console.log('stopped', event);
    console.log('never called - not doing row editing');
  };

  onCellEditingStarted = (event) => {
    console.log('cellStarted', event);
    console.log('cellEditingStarted');
  };

  onCellEditingStopped = (event) => {
    console.log('cellStopped', event);
    console.log('cellEditingStopped');
  };

  onPageSizeChanged = (event) => this.gridAPI.paginationSetPageSize(+event.target.value);

  render() {
    const { rowData, columnDefs } = this.state;
    const { options, selected } = paginator;
    const {
      paginationGoToFirstPage,
      paginationGoToLastPage,
      paginationGoToNextPage,
      paginationGoToPreviousPage,
      paginationGoToPage,
    } = this.gridAPI || {};

    const callbacks = {
      onGridReady: this.onGridReady,
      onRowEditingStarted: this.onRowEditingStarted,
      onRowEditingStopped: this.onRowEditingStopped,
      onCellEditingStarted: this.onCellEditingStarted,
      onCellEditingStopped: this.onCellEditingStopped,
    };
    return (
      <StyledContent>
        <div>
          <div className="ag-theme-balham content">
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              {...callbacks}
              {...getSettings({ paginationPageSize: selected })}
            >
            </AgGridReact>
          </div>
          <Select
            onChange={this.onPageSizeChanged}
            options={options}
            selected={selected}
          />
        </div>
      </StyledContent>
    );
  }
}

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    height: 600px;
    width: 600px;
  }
`;

export default App;
