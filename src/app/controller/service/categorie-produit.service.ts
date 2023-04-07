import { Injectable } from '@angular/core';
import {CategorieProduit} from "../model/categorie-produit.model";
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService {
private _categorieProduit :CategorieProduit;
  private _categorieProduits: Array<CategorieProduit>;
  private _url='http://localhost:8036/api/v1/produit'

  get categorieProduit(): CategorieProduit {
    if(this._categorieProduit==null){
      this._categorieProduit=new CategorieProduit();
    }
    return this._categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this._categorieProduit = value;
  }

  get categorieProduits(): CategorieProduit[] {
    if(this._categorieProduits==null){
      this._categorieProduits=new Array<CategorieProduit>();
    }
    return this._categorieProduits;
  }

  set categorieProduits(value: CategorieProduit[]) {
    this._categorieProduits = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  public save (categorieProduit:CategorieProduit):Observable<Produit>{
    return this._http.post<CategorieProduit>(this.url,this.categorieProduit);
  }
  public findAll():Observable<Array<CategorieProduit>>{
    return this._http.get<Array<CategorieProduit>>(this.url);
  }
  public findByCode(code:string){
    return this._http.get<CategorieProduit>(this.url+ 'code/'+ code);
  }
  public deleteByCode(code:string):Observable<number>{
    console.log('url==>'+this.url+'code/'+code);
    return this._http.delete<number>(this.url+'code/'+this.categorieProduit.code);
  }

  constructor(private _http:HttpClient) { }
}
