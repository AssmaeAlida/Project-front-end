import { Injectable } from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpressinBesoinService {
   private _expressinBesoin!: ExpressionBesoin;
   private _ExpressionBesoins!: Array<ExpressionBesoin>;
  constructor(private http: HttpClient) { }

  get expressinBesoin(): ExpressionBesoin {
    return this._expressinBesoin;
  }

  set expressinBesoin(value: ExpressionBesoin) {
    this._expressinBesoin = value;
  }

  get ExpressionBesoins(): Array<ExpressionBesoin> {
    return this._ExpressionBesoins;
  }

  set ExpressionBesoins(value: Array<ExpressionBesoin>) {
    this._ExpressionBesoins = value;
  }
}
