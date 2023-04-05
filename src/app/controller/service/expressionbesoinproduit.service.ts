import { Injectable } from '@angular/core';
import {ExpressionBesoinProduit} from "../model/expression-besoin-produit";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpressionbesoinproduitService {
    private _expressionBesoinProduit = new ExpressionBesoinProduit();
    private _expressionBesoinProduits = new Array<ExpressionBesoinProduit>;

    private url = 'http://localhost:8036/api/v1/expressionBesoinProduit/'

  constructor(private _http: HttpClient) { }

  public save(expressionBesoinProduit: ExpressionBesoinProduit): Observable<ExpressionBesoinProduit>{
    return this._http.post<ExpressionBesoinProduit>(this.url, this.expressionBesoinProduit);
  }

  public findAll(): Observable<Array<ExpressionBesoinProduit>>{
    return this._http.get<Array<ExpressionBesoinProduit>>(this.url);
  }

  public deleteByCode(code: string): Observable<number>{
    console.log('urlll ==>' +this.url +'code/' + code);
    return this._http.delete<number>(this.url + 'code/' + this.expressionBesoinProduit.code);
  }

  get expressionBesoinProduit(): ExpressionBesoinProduit {

    if(this._expressionBesoinProduit == null){
      this._expressionBesoinProduit = new ExpressionBesoinProduit();
    }
    return this._expressionBesoinProduit;
  }

  set expressionBesoinProduit(value: ExpressionBesoinProduit) {
    this._expressionBesoinProduit = value;
  }

  get expressionBesoinProduits(): ExpressionBesoinProduit[] {
    if(this._expressionBesoinProduits == null){
      this._expressionBesoinProduits = new Array<ExpressionBesoinProduit>();
    }
    return this._expressionBesoinProduits;
  }

  set expressionBesoinProduits(value: ExpressionBesoinProduit[]) {
    this._expressionBesoinProduits = value;
  }

}
