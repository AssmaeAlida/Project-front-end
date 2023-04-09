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

const routes: Routes =[
  { path: 'entite-administratif-create', component:EntiteAdministratifCreateComponent},
  { path: 'expression-besoin-create', component:ExpressionBesoinCreateComponent},
  { path: 'budget-create', component:BudgetCreateComponent},
  { path: 'appel-achat-create', component:AppelAchatCreateComponent}
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
