import {createEnvironmentInjector, Injectable } from '@angular/core';
import {Budget} from "../model/budget";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExpressionBesoin} from "../model/expression-besoin";
import {BudgetEntiteAdministratif} from "../model/budget-entite-administratif";





@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private _budget= new Budget();
  private _budgets= new Array<Budget>();
  private _budgetEntiteAdministratif = new BudgetEntiteAdministratif();
  private  url= 'http://localhost:8036/api/v1/budget/';
  constructor(private http: HttpClient) {  }

  public findById(id: number):Observable<Budget>{
    return this.http.get<Budget>(this.url + "id/" + id );

  }
  public findByAnnee(annee: number):Observable<Budget>{
    return this.http.get<Budget>(this.url + "annee/" + annee );

  }
  public findByAll():Observable<Array<Budget>>{
    return this.http.get<Array<Budget>>(this.url);

  }


  public save( budget : Budget):Observable<Budget>{

    return this.http.post<Budget>(this.url , this.budget );
  }


  public deleteByAnnee( annee:number):Observable<Number>{
    return this.http.delete<Number>(this.url + 'annee/'+ annee);
  }
  get budget(): Budget {
    if (this._budget == null){
      this._budget= new Budget();
    }
    return this._budget;
  }

  set budget(value: Budget) {

    this._budget = value;
  }


  get budgets(): Budget[] {
    if (this._budget == null){
      this._budgets= new Array<Budget>();
    }
    return this._budgets;
  }

  set budgets(value: Budget[]) {
    this._budgets = value;
  }

  get budgetEntiteAdministratif(): BudgetEntiteAdministratif {
    if (this._budgetEntiteAdministratif == null){
      this._budgetEntiteAdministratif= new BudgetEntiteAdministratif();
    }
    return this._budgetEntiteAdministratif;
  }

  set budgetEntiteAdministratif(value: BudgetEntiteAdministratif) {
    this._budgetEntiteAdministratif = value;
  }


}
