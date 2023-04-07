import { Injectable } from '@angular/core';
import {Produit} from "../model/produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  private urlBase='http://localhost:8036';
  private url='/api/v1/produit'
  private _produit: Produit;
private _produits: Array<Produit>;
private _index:number;
  constructor(private http:HttpClient) { }
public findAll(){
  this.http.get<Array<Produit>>(this.urlBase+this.url+'/').subscribe(
    data=>{
    this.produits=data;
    }
    ,error => {
console.log(error);
    }
  );
}
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
  public save (){
  if(this.produit.id==null){
    this.http.post(this.urlBase+this.url+'/',this.produit)

          this.produits.push(this.clone(this._produit));
  }
  else{
this.produits[this._index]=this.clone(this.produit);
    this.produit=null;
  }

  }

  private clone(produit:Produit){
  let myClone=new Produit();
  myClone.id=produit.id;
  myClone.code=produit.code;
  myClone.libelle=produit.libelle;
  return myClone;
  }


  public update(index: number, produit: Produit) {

    this.produit=this.clone(produit);
    this._index=index;
  }


}
