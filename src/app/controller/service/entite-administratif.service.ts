import { Injectable } from '@angular/core';
import {EntiteAdministratif} from "../model/entite-administratif.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntiteAdministratifService {
  private _entiteAdministratif = new EntiteAdministratif();
  private url = 'http://localhost:8036/api/v1/entite-administratif';

  constructor(private http : HttpClient) { }
public findByCode( code:String):Observable<EntiteAdministratif>{
    return this.http.get<EntiteAdministratif>(this.url + 'code/'+ code);
}
public deleteByCode( code:String):Observable<Number>{
    return this.http.delete<Number>(this.url + 'code/'+ code);
}
public save( entiteAdministratif:EntiteAdministratif):Observable<Number>{
    return this.http.post<Number>(this.url +'/', entiteAdministratif );
}


  get entiteAdministratif(): EntiteAdministratif {
    return this._entiteAdministratif;
  }

  set entiteAdministratif(value: EntiteAdministratif) {
    this._entiteAdministratif = value;
  }
}
