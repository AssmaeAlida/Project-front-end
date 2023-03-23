import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommandeCreateComponent } from './view/commande/commande-create/commande-create.component';
import { CommandeListComponent } from './view/commande/commande-list/commande-list.component';
import { CommandeViewComponent } from './view/commande/commande-view/commande-view.component';
import { CommandeEditComponent } from './view/commande/commande-edit/commande-edit.component';
import {FormsModule} from "@angular/forms";
import { ExpressionBesoinCreateComponent } from './view/ExpressionBesoin/expression-besoin-create/expression-besoin-create.component';
import { ExpressionBesoinListComponent } from './view/ExpressionBesoin/expression-besoin-list/expression-besoin-list.component';
import { ExpressionBesoinViewComponent } from './view/ExpressionBesoin/expression-besoin-view/expression-besoin-view.component';
import { ExpressioBesoinEditComponent } from './view/ExpressionBesoin/expressio-besoin-edit/expressio-besoin-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeCreateComponent,
    CommandeListComponent,
    CommandeViewComponent,
    CommandeEditComponent,
    ExpressionBesoinCreateComponent,
    ExpressionBesoinListComponent,
    ExpressionBesoinViewComponent,
    ExpressioBesoinEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
