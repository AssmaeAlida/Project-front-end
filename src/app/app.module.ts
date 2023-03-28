import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ExpressionBesoinCreateComponent } from './view/ExpressionBesoins/expression-besoin-create/expression-besoin-create.component';
import { ExpressionBesoinListComponent } from './view/ExpressionBesoins/expression-besoin-list/expression-besoin-list.component';
import { ExpressionBesoinViewComponent } from './view/ExpressionBesoins/expression-besoin-view/expression-besoin-view.component';
import { ExpressioBesoinEditComponent } from './view/ExpressionBesoins/expression-besoin-edit/expressio-besoin-edit.component';
import {HttpClientModule} from '@angular/common/http';

import { ExpressionBesoinProduitCreateComponent } from './view/ExpressionBesoinProduits/expression-besoin-produit-create/expression-besoin-produit-create.component';
import { ExpressionBesoinProduitListComponent } from './view/expressionBesoinProduits/expression-besoin-produit-list/expression-besoin-produit-list.component';
import { ExpressionBesoinProduitViewComponent } from './view/expressionBesoinProduits/expression-besoin-produit-view/expression-besoin-produit-view.component';
import { ExpressionBesoinProduitEditComponent } from './view/expressionBesoinProduits/expression-besoin-produit-edit/expression-besoin-produit-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionBesoinCreateComponent,
    ExpressionBesoinListComponent,
    ExpressionBesoinViewComponent,
    ExpressioBesoinEditComponent,
    ExpressionBesoinProduitCreateComponent,
    ExpressionBesoinProduitListComponent,
    ExpressionBesoinProduitViewComponent,
    ExpressionBesoinProduitEditComponent
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
