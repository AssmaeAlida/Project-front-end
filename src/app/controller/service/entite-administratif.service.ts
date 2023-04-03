import { Injectable } from '@angular/core';
import {EntiteAdministratif} from "../model/entite-administratif.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntiteAdministratifService {
  private _entiteAdministratif = new EntiteAdministratif();
  private _entiteAdministratifs=new Array<EntiteAdministratif>();
  private url = 'http://localhost:8036/api/v1/entite-administratif/';

  constructor(private http : HttpClient) { }
public findByCode( code:String):Observable<EntiteAdministratif>{
    return this.http.get<EntiteAdministratif>(this.url + 'code/'+ code);
}
public deleteByCode( code:String):Observable<Number>{
    return this.http.delete<Number>(this.url + 'code'+ code);
}
public save( entiteAdministratif:EntiteAdministratif):Observable<number>{
    this._entiteAdministratif=entiteAdministratif;
  this.entiteAdministratifs.push(this._entiteAdministratif);
  return this.http.post<number>(this.url ,this.entiteAdministratif );
}
  public findAll():Observable<Array<EntiteAdministratif>>{
    return this.http.get<Array<EntiteAdministratif>>(this.url)
  }


  get entiteAdministratif(): EntiteAdministratif {
    if (this._entiteAdministratif==null){
      this._entiteAdministratif=new EntiteAdministratif();
    }
    return this._entiteAdministratif;
  }

  set entiteAdministratif(value: EntiteAdministratif) {
    this._entiteAdministratif = value;
  }

  get entiteAdministratifs(): EntiteAdministratif[] {
    if (this._entiteAdministratifs==null){
      this._entiteAdministratifs=new Array<EntiteAdministratif>()
    }
    return this._entiteAdministratifs;
  }

  set entiteAdministratifs(value: EntiteAdministratif[]) {
    this._entiteAdministratifs = value;
  }
}
