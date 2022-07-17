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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static createTranslateLoader: any;
}
