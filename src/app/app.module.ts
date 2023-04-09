import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExpressionBesoinCreateComponent } from './view/ExpressionBesoins/expression-besoin-create/expression-besoin-create.component';
import {HttpClientModule} from '@angular/common/http';
import { EntiteAdministratifCreateComponent } from './view/EntiteAdministratifs/entite-administratif-create/entite-administratif-create.component';
import { EntiteAdministratifListComponent } from './view/EntiteAdministratifs/entite-administratif-list/entite-administratif-list.component';
import { EntiteAdministratifViewComponent } from './view/EntiteAdministratifs/entite-administratif-view/entite-administratif-view.component';
import { EntiteAdministratifEditComponent } from './view/EntiteAdministratifs/entite-administratif-edit/entite-administratif-edit.component';
import { BudgetCreateComponent } from './view/Budgets/budget-create/budget-create.component';
import { BudgetEditComponent } from './view/Budgets/budget-edit/budget-edit.component';
import { BudgetEntiteAdministratifeCreateComponent } from './view/BudgetEntiteAdministratifes/budget-entite-administratife-create/budget-entite-administratife-create.component';
import { BudgetEntiteAdministratifeListComponent } from './view/BudgetEntiteAdministratifes/budget-entite-administratife-list/budget-entite-administratife-list.component';
import { BudgetEntiteAdministratifeViewComponent } from './view/BudgetEntiteAdministratifes/budget-entite-administratife-view/budget-entite-administratife-view.component';
import { BudgetEntiteAdministratifeEditComponent } from './view/BudgetEntiteAdministratifes/budget-entite-administratife-edit/budget-entite-administratife-edit.component';
import {
  ExpressionBesoinProduitCreateComponent
} from "./view/ExpressionBesoinProduits/expression-besoin-produit-create/expression-besoin-produit-create.component";
import {
  ExpressionBesoinProduitListComponent
} from "./view/ExpressionBesoinProduits/expression-besoin-produit-list/expression-besoin-produit-list.component";
import { ProduitCreateComponent } from './view/Produits/produit-create/produit-create.component';
import { ProduitListComponent } from './view/Produits/produit-list/produit-list.component';
import { CategorieEntiteAdministratifCreateComponent } from './view/CategorieEntiteAdministratif/categorie-entite-administratif-create/categorie-entite-administratif-create.component';
import { CategorieEntiteAdministratifListComponent } from './view/CategorieEntiteAdministratif/categorie-entite-administratif-list/categorie-entite-administratif-list.component';
import {AppelAchatCreateComponent} from "./view/AppelAchat/appel-achat-create/appel-achat-create.component";
import {MenuComponent} from "./menu/menu.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';




let routes;

@NgModule({
  declarations: [
    AppComponent,
    ExpressionBesoinCreateComponent,
    EntiteAdministratifCreateComponent,
    EntiteAdministratifListComponent,
    EntiteAdministratifViewComponent,
    EntiteAdministratifEditComponent,
    ExpressionBesoinProduitCreateComponent,
    ExpressionBesoinProduitListComponent,
    ProduitCreateComponent,
    ProduitListComponent,
    CategorieEntiteAdministratifCreateComponent,
    CategorieEntiteAdministratifListComponent,
    BudgetCreateComponent,
    BudgetEditComponent,
    BudgetEntiteAdministratifeCreateComponent,
    BudgetEntiteAdministratifeListComponent,
    BudgetEntiteAdministratifeViewComponent,
    BudgetEntiteAdministratifeEditComponent,
    AppelAchatCreateComponent,
    MenuComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

