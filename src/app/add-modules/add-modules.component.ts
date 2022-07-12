import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddModuleModalComponent} from "./add-module-modal/add-module-modal.component";


@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.scss']
})

export class AddModulesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddModuleModalComponent);
  }

  ngOnInit(): void {
  }

}
