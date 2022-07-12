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

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolBarComponent,
    AddModulesComponent,
    AddModuleModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
