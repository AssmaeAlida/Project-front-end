import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ExpressionBesoinCreateComponent } from './view/ExpressionBesoins/expression-besoin-create/expression-besoin-create.component';
import { ExpressionBesoinListComponent } from './view/ExpressionBesoins/expression-besoin-list/expression-besoin-list.component';
import { ExpressionBesoinViewComponent } from './view/ExpressionBesoins/expression-besoin-view/expression-besoin-view.component';
import { ExpressioBesoinEditComponent } from './view/ExpressionBesoins/expressio-besoin-edit/expressio-besoin-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { AppelAchatProduitCreateComponent } from './view/AppelAchatProduit/appel-achat-produit-create/appel-achat-produit-create.component';
import { AppelAchatProduitEditComponent } from './view/AppelAchatProduit/appel-achat-produit-edit/appel-achat-produit-edit.component';
import { AppelAchatProduitListComponent } from './view/AppelAchatProduit/appel-achat-produit-list/appel-achat-produit-list.component';
import { AppelAchatProduitViewComponent } from './view/AppelAchatProduit/appel-achat-produit-view/appel-achat-produit-view.component';

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
    AppelAchatProduitViewComponent
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
