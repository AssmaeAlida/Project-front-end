import { Injectable } from '@angular/core';
import {CategorieEntiteAdministratif} from "../model/categorie-entite-administratif.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntiteAdministratif} from "../model/entite-administratif.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieEntiteAdministratifService {
  private _categorieEntiteAdmistratif=new CategorieEntiteAdministratif();
  private _categorieEntiteAdministratifs=new Array<CategorieEntiteAdministratif>();
  private url = 'http://localhost:8036/api/v1/categorie-entite/';
  constructor(private http : HttpClient) { }
  public findByCode( code:String):Observable<CategorieEntiteAdministratif>{
    return this.http.get<CategorieEntiteAdministratif>(this.url + 'code/'+ code);
  }
  public deleteByCode( code:String):Observable<Number>{
    return this.http.delete<Number>(this.url + 'code/'+ code);
  }
  public save( categorieEntiteAdministratif:CategorieEntiteAdministratif):Observable<Number>{
    this._categorieEntiteAdministratifs.push({...this._categorieEntiteAdmistratif})
    return this.http.post<Number>(this.url , categorieEntiteAdministratif );
  }
  public findAll():Observable<Array<CategorieEntiteAdministratif>>{
    return this.http.get<Array<CategorieEntiteAdministratif>>(this.url);
  }

  get categorieEntiteAdmistratif(): CategorieEntiteAdministratif {
    if (this._categorieEntiteAdmistratif==null){
      this._categorieEntiteAdmistratif=new CategorieEntiteAdministratif();
    }
    return this._categorieEntiteAdmistratif;
  }

  set categorieEntiteAdmistratif(value: CategorieEntiteAdministratif) {
    this._categorieEntiteAdmistratif = value;

  }

  get categorieEntiteAdministratifs(): CategorieEntiteAdministratif[] {
    if (this._categorieEntiteAdministratifs==null){
      this._categorieEntiteAdministratifs=new Array<CategorieEntiteAdministratif>();
    }
    return this._categorieEntiteAdministratifs;
  }

  set categorieEntiteAdministratifs(value: CategorieEntiteAdministratif[]) {
    this._categorieEntiteAdministratifs = value;
  }
}
