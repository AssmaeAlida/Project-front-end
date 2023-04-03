import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BudgetEntiteAdministratif} from "../model/budget-entite-administratif";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BudgetEntiteAdministratifeService {
  private _budgetEntiteAdministratif= new BudgetEntiteAdministratif();
  private _budgetEntiteAdministratifs= new Array<BudgetEntiteAdministratif>();

  private url= "http://localhost:8036/api/v1/BudgetEntiteAdministratif/"
  constructor(private http: HttpClient) {  }

  public findById(ref: number):Observable<BudgetEntiteAdministratif>{
    return this.http.get<BudgetEntiteAdministratif>(this.url + "ref/" + ref );

  }

  public findByAll():Observable<Array<BudgetEntiteAdministratif>>{
    return this.http.get<Array<BudgetEntiteAdministratif>>(this.url);

  }



  public save(budgetEntiteAdministratif: BudgetEntiteAdministratif ):Observable<BudgetEntiteAdministratif>{
    this._budgetEntiteAdministratif = budgetEntiteAdministratif;
    return this.http.post<BudgetEntiteAdministratif>(this.url , BudgetEntiteAdministratif );
  }

  get BudgetEntiteAdministratif(): BudgetEntiteAdministratif {
    if (this._budgetEntiteAdministratif == null){
      this._budgetEntiteAdministratif= new BudgetEntiteAdministratif();
    }
    return this._budgetEntiteAdministratif;
  }

  set BudgetEntiteAdministratif(value: BudgetEntiteAdministratif) {
    this._budgetEntiteAdministratif = value;
  }

  get BudgetEntiteAdministratifs(): BudgetEntiteAdministratif[] {
    if (this._budgetEntiteAdministratifs == null){
      this._budgetEntiteAdministratifs= new Array<BudgetEntiteAdministratif>();
    }
    return this._budgetEntiteAdministratifs;
  }

  set BudgetEntiteAdministratifs(value: BudgetEntiteAdministratif[]) {
    this._budgetEntiteAdministratifs = value;
  }

}
