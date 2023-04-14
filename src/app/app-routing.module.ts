import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  ExpressionBesoinCreateComponent
} from "./view/ExpressionBesoins/expression-besoin-create/expression-besoin-create.component";
import {
  EntiteAdministratifCreateComponent
} from "./view/EntiteAdministratifs/entite-administratif-create/entite-administratif-create.component";
import {BudgetCreateComponent} from "./view/Budgets/budget-create/budget-create.component";
import {AppelAchatCreateComponent} from "./view/AppelAchat/appel-achat-create/appel-achat-create.component";
import {HomeComponent} from "./view/home/home.component";
import {PageNoteFoundedComponent} from "./view/page-note-founded/page-note-founded.component";

const routes: Routes =[
  {path: '' , component:HomeComponent},
  { path: 'entite-administratif-create', component:EntiteAdministratifCreateComponent},
  { path: 'expression-besoin-create', component:ExpressionBesoinCreateComponent},
  { path: 'budget-create', component:BudgetCreateComponent},
  { path: 'home', component: HomeComponent},
  { path: 'appel-achat-create', component:AppelAchatCreateComponent},
  {path:'**',component:PageNoteFoundedComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
