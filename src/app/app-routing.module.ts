import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModuleCardsComponent} from "./module-cards/module-cards.component";
import {ModulesTableComponent} from "./modules-table/modules-table.component";

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: ModuleCardsComponent},
  {path: 'Modules', component: ModulesTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
