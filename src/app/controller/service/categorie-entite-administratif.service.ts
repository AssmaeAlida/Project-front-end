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
  private url = 'http://localhost:8036/api/v1/categorie-entite';
  constructor(private http : HttpClient) { }
  public findByCode( code:String):Observable<CategorieEntiteAdministratif>{
    return this.http.get<CategorieEntiteAdministratif>(this.url + 'code/'+ code);
  }
  public deleteByCode( code:String):Observable<Number>{
    return this.http.delete<Number>(this.url + 'code/'+ code);
  }
  public save( categorieEntiteAdministratif:EntiteAdministratif):Observable<Number>{
    return this.http.post<Number>(this.url +'/', categorieEntiteAdministratif );
  }

  get categorieEntiteAdmistratif(): CategorieEntiteAdministratif {
    return this._categorieEntiteAdmistratif;
  }

  set categorieEntiteAdmistratif(value: CategorieEntiteAdministratif) {
    this._categorieEntiteAdmistratif = value;
  }
}
