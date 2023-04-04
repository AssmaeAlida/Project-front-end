import { Injectable } from '@angular/core';
import {CategorieAppelAchat} from "../model/categorie-appel-achat.model";
import {CategorieEntiteAdministratif} from "../model/categorie-entite-administratif.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieAppelAchatService {
  private _categorieAppelAchat=new CategorieAppelAchat();
  private _categorieAppelAchats=new Array<CategorieAppelAchat>();
  private _url = 'http://localhost:8036/api/v1/categorie-appel-achat/';

  constructor(private http : HttpClient) { }
  public findByCode(code:String):Observable<CategorieAppelAchat>{
    return this.http.get<CategorieAppelAchat>(this._url+'code/'+code);
  }
  public deleteByCode(code:String):Observable<Number>{
    return this.http.delete<Number>(this._url+'code/'+code);
  }
  public save (categorieAppelAchat:CategorieAppelAchat):Observable<Number>{
    this._categorieAppelAchats.push({...this._categorieAppelAchat})
    return this.http.post<Number>(this._url , categorieAppelAchat);
  }
  public findAll():Observable<Array<CategorieAppelAchat>>{
    return this.http.get<Array<CategorieAppelAchat>>(this._url);
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this._categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this._categorieAppelAchat = value;
  }

  get categorieAppelAchats(): CategorieAppelAchat[] {
    if (this._categorieAppelAchats==null){
      this._categorieAppelAchats=new Array<CategorieAppelAchat>();
    }
    return this._categorieAppelAchats;
  }

  set categorieAppelAchats(value: CategorieAppelAchat[]) {
    this._categorieAppelAchats = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
