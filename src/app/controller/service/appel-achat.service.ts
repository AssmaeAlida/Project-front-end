import { Injectable } from '@angular/core';
import {CategorieAppelAchat} from "../model/categorie-appel-achat.model";
import {AppelAchat} from "../model/appel-achat.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppelAchatService {
  private _appelAchat= new AppelAchat();
  private _listAppelAchat= new Array<AppelAchat>;
  private url= 'http://localhost:8036/api/v1/appel-achat/';
  private _categorieAppelAchat= new CategorieAppelAchat();

  public save(appelAchat: AppelAchat): Observable<number> {
    return this.http.post<number>(this.url,appelAchat)
  }
  public findByRef(ref: String): Observable<AppelAchat> {
    return this.http.get<AppelAchat>(this.url+'ref/'+ref)
  }
  public deleteByRef(ref: String): Observable<number> {
    return this.http.delete<number>(this.url+'ref/'+ref)
  }
  constructor(private http:HttpClient) { }
  get appelAchat(): AppelAchat {
    return this._appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this._appelAchat = value;
  }

  get listAppelAchat(): AppelAchat[] {
    return this._listAppelAchat;
  }

  set listAppelAchat(value: AppelAchat[]) {
    this._listAppelAchat = value;
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this._categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this._categorieAppelAchat = value;
  }
}
