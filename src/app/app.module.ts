import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { SideNavComponent } from './side-nav/side-nav.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { AddModulesComponent } from './add-modules/add-modules.component';
import { AddModuleModalComponent } from './add-modules/add-module-modal/add-module-modal.component';
import {MatButtonModule} from "@angular/material/button";
import { ModuleCardsComponent } from './module-cards/module-cards.component';
import { ModulesTableComponent } from './modules-table/modules-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MediaObserver, MediaChange} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolBarComponent,
    AddModulesComponent,
    AddModuleModalComponent,
    ModuleCardsComponent,
    ModulesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
