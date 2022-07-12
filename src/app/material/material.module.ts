import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [
  MatIconModule,
  MatDialogModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
