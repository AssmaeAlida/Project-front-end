import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ExpressionBesoinCreateComponent } from './view/ExpressionBesoins/expression-besoin-create/expression-besoin-create.component';
import { ExpressionBesoinListComponent } from './view/ExpressionBesoins/expression-besoin-list/expression-besoin-list.component';
import { ExpressionBesoinViewComponent } from './view/ExpressionBesoins/expression-besoin-view/expression-besoin-view.component';

import {HttpClientModule} from '@angular/common/http';
import { EntiteAdministratifCreateComponent } from './view/EntiteAdministratifs/entite-administratif-create/entite-administratif-create.component';
import { EntiteAdministratifListComponent } from './view/EntiteAdministratifs/entite-administratif-list/entite-administratif-list.component';
import { EntiteAdministratifViewComponent } from './view/EntiteAdministratifs/entite-administratif-view/entite-administratif-view.component';
import { EntiteAdministratifEditComponent } from './view/EntiteAdministratifs/entite-administratif-edit/entite-administratif-edit.component';
import {
  ExpressionBesoinProduitCreateComponent
} from "./view/ExpressionBesoinProduits/expression-besoin-produit-create/expression-besoin-produit-create.component";
import {
  ExpressionBesoinProduitListComponent
} from "./view/ExpressionBesoinProduits/expression-besoin-produit-list/expression-besoin-produit-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ExpressionBesoinCreateComponent,
    ExpressionBesoinListComponent,
    ExpressionBesoinViewComponent,
    EntiteAdministratifCreateComponent,
    EntiteAdministratifListComponent,
    EntiteAdministratifViewComponent,
    EntiteAdministratifEditComponent,
    ExpressionBesoinProduitCreateComponent,
    ExpressionBesoinProduitListComponent
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
