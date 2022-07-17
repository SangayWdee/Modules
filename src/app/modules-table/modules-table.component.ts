import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-modules-table',
  templateUrl: './modules-table.component.html',
  styleUrls: ['./modules-table.component.scss']
})
export class ModulesTableComponent implements AfterViewInit {
  actions = [
    {icons: 'edit', label: 'Edit Module'},
    {icons: 'title', label: 'Rename Module'},
    {icons: 'category', label: 'Change Category'},
    {icons: 'content_copy', label: 'Duplicate Module'},
    {icons: 'delete', label: 'Delete Module'}
  ];

  constructor() { }

  displayedColumns: string[] = ['name', 'category', 'update', 'created', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
    // ngOnInit(): void {
  // }

}

export interface PeriodicElement {
  name: string;
  category: string;
  update: string;
  created: string;
  status: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},
  {name: 'Lorem ipsum dolor sit amet.', category: 'lorem', update: '02/02/2022', created:'03/03/2022', status: 'In Use'},

];
