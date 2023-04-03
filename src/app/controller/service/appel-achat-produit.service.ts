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
  private _appelAchatProduits= new Array<AppelAchatProduit>;
  private url= 'http://localhost:8036/api/v1/appel-achat-produit/';
  private _AppelAchat= new AppelAchat();
  private _produit= new Produit();

  public save(appelAchatProduit: AppelAchatProduit): Observable<number> {
    return this.http.post<number>(this.url,appelAchatProduit)
  }
  public findAll(): Observable <Array<AppelAchatProduit>> {
    return this.http.get<Array<AppelAchatProduit>>(this.url)
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

  get AppelAchat(): AppelAchat {
    return this._AppelAchat;
  }

  set AppelAchat(value: AppelAchat) {
    this._AppelAchat = value;
  }

  get produit(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }
  get appelAchatProduits(): AppelAchatProduit[]{
    return this._appelAchatProduits;
  }
  set appelAchatProduits(value){
    this._appelAchatProduits = value;
  }
}
