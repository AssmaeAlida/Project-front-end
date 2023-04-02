import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ExpressionBesoinCreateComponent } from './view/ExpressionBesoins/expression-besoin-create/expression-besoin-create.component';
import { ExpressionBesoinListComponent } from './view/ExpressionBesoins/expression-besoin-list/expression-besoin-list.component';
import { ExpressionBesoinViewComponent } from './view/ExpressionBesoins/expression-besoin-view/expression-besoin-view.component';
import { ExpressioBesoinEditComponent } from './view/ExpressionBesoins/expression-besoin-edit/expressio-besoin-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { AppelAchatProduitCreateComponent } from './view/AppelAchatProduit/appel-achat-produit-create/appel-achat-produit-create.component';
import { AppelAchatProduitEditComponent } from './view/AppelAchatProduit/appel-achat-produit-edit/appel-achat-produit-edit.component';
import { AppelAchatProduitListComponent } from './view/AppelAchatProduit/appel-achat-produit-list/appel-achat-produit-list.component';
import { AppelAchatProduitViewComponent } from './view/AppelAchatProduit/appel-achat-produit-view/appel-achat-produit-view.component';
import { CategorieEntiteAdministratifCreateComponent } from './view/CategorieEntiteAdministratif/categorie-entite-administratif-create/categorie-entite-administratif-create.component';
import { CategorieEntiteAdministratifListComponent } from './view/CategorieEntiteAdministratif/categorie-entite-administratif-list/categorie-entite-administratif-list.component';
import { EntiteAdministratifCreateComponent } from './view/EntiteAdministratifs/entite-administratif-create/entite-administratif-create.component';
import { EntiteAdministratifListComponent } from './view/EntiteAdministratifs/entite-administratif-list/entite-administratif-list.component';
import { EntiteAdministratifViewComponent } from './view/EntiteAdministratifs/entite-administratif-view/entite-administratif-view.component';
import { EntiteAdministratifEditComponent } from './view/EntiteAdministratifs/entite-administratif-edit/entite-administratif-edit.component';
import {ExpressionBesoinProduitCreateComponent} from "./view/ExpressionBesoinProduits/expression-besoin-produit-create/expression-besoin-produit-create.component";
import {ExpressionBesoinProduitListComponent} from "./view/ExpressionBesoinProduits/expression-besoin-produit-list/expression-besoin-produit-list.component";
import { ProduitCreateComponent } from './view/Produits/produit-create/produit-create.component';
import { ProduitListComponent } from './view/Produits/produit-list/produit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionBesoinCreateComponent,
    ExpressionBesoinListComponent,
    ExpressionBesoinViewComponent,
    ExpressioBesoinEditComponent,
    AppelAchatProduitCreateComponent,
    AppelAchatProduitEditComponent,
    AppelAchatProduitListComponent,
    AppelAchatProduitViewComponent,
    CategorieEntiteAdministratifCreateComponent,
    CategorieEntiteAdministratifListComponent,
    EntiteAdministratifCreateComponent,
    EntiteAdministratifListComponent,
    EntiteAdministratifViewComponent,
    EntiteAdministratifEditComponent,
    ExpressionBesoinProduitCreateComponent,
    ExpressionBesoinProduitListComponent,
    ProduitCreateComponent,
    ProduitListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
