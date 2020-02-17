import { Component, OnInit } from '@angular/core';

import { sampleData } from './sampledata';

import { TableAnimations } from './table.animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  animations: [TableAnimations],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData = sampleData;
  tableSelected = null;

  tableSetting: TableColumnSettings[] = [{
    label: 'Nome',
    field: 'Name'
  }, {
    label: 'Età',
    field: 'Age',
    width: '400px'
  }, {
    label: 'Regione',
    field: 'Region'
  }, {
    label: 'Telefono',
    field: 'Telephone'
  }]

  constructor() { }

  ngOnInit() { }

  onRowSelect(row: any) {
    this.tableSelected = row;
  }

}

export interface TableColumnSettings {
  label: string,
  field: string,
  width?: string
}