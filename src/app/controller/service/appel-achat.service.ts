import { Injectable } from '@angular/core';
import {CategorieAppelAchat} from "../model/categorie-appel-achat.model";
import {AppelAchat} from "../model/appel-achat.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppelAchatProduit} from "../model/appel-achat-produit.model";

@Injectable({
  providedIn: 'root'
})
export class AppelAchatService {
  private _appelAchat= new AppelAchat();
  private _listAppelAchat= new Array<AppelAchat>();
  private url= 'http://localhost:8036/api/v1/appel-achat/';
  private _categorieAppelAchat= new CategorieAppelAchat();
  private _appelAchatProduit= new AppelAchatProduit();


  public save(appelAchat: AppelAchat): Observable<AppelAchat> {
    this._appelAchat = appelAchat;
    this._listAppelAchat.push({...this._appelAchat});
    return this._http.post<AppelAchat>(this.url,this._appelAchat)
  }
  public findByRef(ref: String): Observable<AppelAchat> {
    return this._http.get<AppelAchat>(this.url+'ref/'+ref)
  }
  public deleteByRef(ref: String): Observable<number> {
    return this._http.delete<number>(this.url+'ref/'+ref+this.appelAchatProduit.ref)
  }
  constructor(private _http:HttpClient) { }
  public addAppelAchatProduit(){
    this.appelAchat.appelAchatProduits.push({...this.appelAchatProduit});
  }
  private cloneAppelAchatProduit(appelAchatProduit: AppelAchatProduit){
    const myClone = new AppelAchatProduit();
    myClone.produit = appelAchatProduit.produit;
    myClone.quantite = appelAchatProduit.quantite;
    myClone.quantiteLivraison = appelAchatProduit.quantiteLivraison;
    myClone.quantiteReception = appelAchatProduit.quantiteReception;
    return myClone;
  }
  public findAll(): Observable<Array<AppelAchat>>{
    return this._http.get<Array<AppelAchat>>(this.url);
  }
  get appelAchat(): AppelAchat {
    if (this._appelAchat == null)
      this._appelAchat = new AppelAchat();
    return this._appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this._appelAchat = value;
  }
  get appelAchatProduit(): AppelAchatProduit {
    if (this._appelAchatProduit == null)
      this._appelAchatProduit = new AppelAchatProduit();
    return this._appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this._appelAchatProduit = value;
  }

  get listAppelAchat(): AppelAchat[] {
    if (this._listAppelAchat == null)
      this._listAppelAchat = new Array<AppelAchat>();
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
