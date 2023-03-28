import {createEnvironmentInjector, Injectable} from '@angular/core';
import {ExpressionBesoin} from '../model/expression-besoin';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Environment} from "@angular/cli/lib/config/workspace-schema";

@Injectable({
  providedIn: 'root'
})
export class ExpressinBesoinService {
   private _expressinBesoin = new ExpressionBesoin();
   private _expressionBesoins = new Array<ExpressionBesoin>;
   private _url =  'http://localhost:8036/api/v1/expressionbesoin';

  public save(expressionBesoin: ExpressionBesoin): Observable<ExpressionBesoin>{
     return this._http.post<ExpressionBesoin>(this._url, this.expressinBesoin);
   }
   public deleteByCode(code: string): Observable<number>{
    console.log('urll==>' +this._url +'code/' + code);
     return this._http.delete<number>(this._url + 'code/' + this.expressinBesoin.code);
   }
   public findAll(): Observable<Array<ExpressionBesoin>>{
     return this._http.get<Array<ExpressionBesoin>>(this._url);
   }
  constructor(private _http: HttpClient) { }

  get expressinBesoin(): ExpressionBesoin {
    if(this._expressinBesoin == null){
      this._expressinBesoin = new ExpressionBesoin();
    }
    return this._expressinBesoin;
  }

  set expressinBesoin(value: ExpressionBesoin) {
    this._expressinBesoin = value;
  }
  get expressionBesoins(): Array<ExpressionBesoin> {
    if(this._expressionBesoins == null){
      this._expressionBesoins = new Array<ExpressionBesoin>();
    }
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }


}
