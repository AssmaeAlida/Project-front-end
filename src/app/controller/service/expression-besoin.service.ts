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
   private _expressionBesoins = new Array<ExpressionBesoin>;
   private url =  'http://localhost:8036/api/v1/expressionbesoin/';

  public save(expressionBesoin: ExpressionBesoin): Observable<ExpressionBesoin>{
    this._expressionBesoin = expressionBesoin;
    return this._http.post<ExpressionBesoin>(this.url, this._expressionBesoin);
   }
   public deleteByCode(code: string): Observable<number>{
    console.log('urll==>' +this.url +'code/' + code);
     return this._http.delete<number>(this.url + 'code/' + this._expressionBesoin.code);
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
}
