import { Injectable } from '@angular/core';
import {Produit} from "../model/produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategorieProduit} from "../model/categorie-produit.model";

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  private _urlBase='http://localhost:8036';
  private url='http://localhost:8036/api/v1/produit/'
  private _produit: Produit;
  private _produits: Array<Produit>;
  private _categorieProduit:CategorieProduit;
  private _categorieProduits=new Array<CategorieProduit>();
  private _index:number;
  constructor(private http:HttpClient) { }

 //Getters And Setters
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

  get categorieProduit(): CategorieProduit {
    if(this._categorieProduit==null){
      this._categorieProduit=new CategorieProduit();
    }
    return this._categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this._categorieProduit = value;
  }


  get urlBase(): string {
    return this._urlBase;
  }

  set urlBase(value: string) {
    this._urlBase = value;
  }

//la methode findAll
  public findAll(): Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(this.url);
  }

 //la methode save
  public save( produit:Produit):Observable<number>{
    this.categorieProduit=this.produit.categorieProduit;
    this._produit=produit;
    this.produits.push({...this._produit});
    return this.http.post<number>(this.url ,this._produit );
  }

 //la methode Clone
  private clone(produit:Produit){
   let myClone=new Produit();
   myClone.id=produit.id;
   myClone.code=produit.code;
   myClone.libelle=produit.libelle;
   return myClone;
  }

//la methode update
  public update(index: number, produit: Produit) {
    this.produit=this.clone(produit);
    this._index=index;
  }

}
