import { Injectable } from '@angular/core';
import {Produit} from "../model/produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
private _produit= new Produit();
private _produits=new Array<Produit>;
private url='http://localhost:8036/api/v1/produit/'
  constructor(private _http:HttpClient) { }

  get produit(): Produit {
  if(this._produit==null){
    this._produit= new Produit();
  }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Produit[] {
  if(this._produits==null){
    this._produits=new Array<Produit>;
  }
    return this._produits;
  }

  set produits(value: Produit[]) {
    this._produits = value;
  }
  public save (produit:Produit):Observable<Produit>{
   this._produit=produit;
    this.produits.push(this._produit);
  return this._http.post<Produit>(this.url,this.produit);
  }
  public findAll():Observable<Array<Produit>>{
  return this._http.get<Array<Produit>>(this.url);
  }
  public deleteByCode(code:string):Observable<number>{
  console.log('url==>'+this.url+'code/'+code);
  return this._http.delete<number>(this.url+'code/'+this.produit.code);
  }
}
