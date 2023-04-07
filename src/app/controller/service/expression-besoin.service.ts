import { Injectable} from '@angular/core';
import {ExpressionBesoin} from '../model/expression-besoin';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ExpressionBesoinProduit} from "../model/expression-besoin-produit";



@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinService {
   private _expressionBesoin = new ExpressionBesoin();
   private _expressionBesoinProduit = new ExpressionBesoinProduit();
   private _expressionBesoins = new Array<ExpressionBesoin>();
   private url =  'http://localhost:8036/api/v1/expressionbesoin/';

   public addExpressionBesoinProduit(){
     this.expressionBesoin.expressionBesoinsProduits.push({...this.expressionBesoinProduit});
   }

  public save(expressionBesoin: ExpressionBesoin): Observable<ExpressionBesoin>{
    this._expressionBesoin = expressionBesoin;
    this.expressionBesoins.push({...this._expressionBesoin});
    return this._http.post<ExpressionBesoin>(this.url, this._expressionBesoin);
   }

   public deleteByCode(code: string): Observable<number>{
    console.log('urll==>' +this.url +'code/' + code);
     return this._http.delete<number>(this.url + 'code/' + code);
   }
  public deleteByCodee(code: string): Observable<number>{
    console.log('urlll ==>' +this.url +'code/' + code);
    return this._http.delete<number>(this.url + 'code/' + this.expressionBesoinProduit.code);
  }
   public findAll(): Observable<Array<ExpressionBesoin>>{
     return this._http.get<Array<ExpressionBesoin>>(this.url);
   }
  constructor(private _http: HttpClient) { }


  get expressionBesoin(): ExpressionBesoin {
    if(this._expressionBesoin == null){
      this._expressionBesoin = new ExpressionBesoin();
    }
    return this._expressionBesoin;
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

  set expressionBesoin(value: ExpressionBesoin) {
    this._expressionBesoin = value;
  }

  get expressionBesoins(): ExpressionBesoin[] {
    if(this._expressionBesoins == null){
      this._expressionBesoins = new Array<ExpressionBesoin>();
    }
    return this._expressionBesoins;
  }

  set expressionBesoins(value: ExpressionBesoin[]) {
    this._expressionBesoins = value;
  }

  private cloneExpressionBesoinProduit(expressionBesoinProduit: ExpressionBesoinProduit) {
     const myClone = new ExpressionBesoinProduit();
     myClone.produit = expressionBesoinProduit.produit;
     myClone.quantite = expressionBesoinProduit.quantite;
    return myClone ;
  }
}
