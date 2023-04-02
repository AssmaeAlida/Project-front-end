import { Injectable } from '@angular/core';
import {AppelAchat} from "../model/appel-achat.model";
import {Produit} from "../model/produit.model";
import {AppelAchatProduit} from "../model/appel-achat-produit.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppelAchatProduitService {
  private _appelAchatProduit= new AppelAchatProduit();
  private _listAppelAchatProduit= new Array<AppelAchatProduit>;
  private url= 'http://localhost:8036/api/v1/appel-achat-produit/';
  private _AppelAchat= new AppelAchat();
  private _produit= new Produit();

  public save(appelAchatProduit: AppelAchatProduit): Observable<number> {
    return this.http.post<number>(this.url,appelAchatProduit)
  }
  public findByRef(ref: String): Observable<AppelAchatProduit> {
    return this.http.get<AppelAchatProduit>(this.url+'ref/'+ref)
  }
  public deleteByRef(ref: String): Observable<number> {
    return this.http.delete<number>(this.url+'ref/'+ref)
  }
  constructor(private http:HttpClient) { }

  get appelAchatProduit(): AppelAchatProduit {
    return this._appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this._appelAchatProduit = value;
  }

  get listAppelAchatProduit(): AppelAchatProduit[] {
    return this._listAppelAchatProduit;
  }

  set listAppelAchatProduit(value: AppelAchatProduit[]) {
    this._listAppelAchatProduit = value;
  }

  get AppelAchat(): AppelAchat {
    return this._AppelAchat;
  }

  set AppelAchat(value: AppelAchat) {
    this._AppelAchat = value;
  }

  get produit(): any {
    return this._produit;
  }

  set produit(value: any) {
    this._produit = value;
  }
}
