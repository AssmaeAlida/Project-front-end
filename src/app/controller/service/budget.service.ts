import {createEnvironmentInjector, Injectable } from '@angular/core';
import {Budget} from "../model/budget";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExpressionBesoin} from "../model/expression-besoin";
import {BudgetEntiteAdministratif} from "../model/budget-entite-administratif";
import {ExpressionBesoinProduit} from "../model/expression-besoin-produit";
import {CategorieEntiteAdministratif} from "../model/categorie-entite-administratif.model";





@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private _budget= new Budget();
  private _budgets= new Array<Budget>();
  private _budgetEntiteAdministratif = new BudgetEntiteAdministratif();
  private  url= 'http://localhost:8036/api/v1/budget/';
  constructor(private http: HttpClient) {  }


  public findByAnnee(annee: number):Observable<Budget>{

    return this.http.get<Budget>(this.url + "annee/" + annee );

  }
  public findByAll():Observable<Array<Budget>>{
    return this.http.get<Array<Budget>>(this.url);

  }



  public save( budget : Budget):Observable<Budget>{
   this._budget= budget;
    this._budgets.push({...this._budget});
    return this.http.post<Budget>(this.url ,this.budget);

  }


    public init(){
    for (var _i=1; _i<=4 ;_i++){
      let mybudget= new Budget();
      mybudget.annee=_i;
      mybudget.montantTotal= 10000000;
      this.budgets.push(mybudget)
    }
    }
  public deleteByAnnee( annee:number):Observable<Number>{
    console.log('urll==>' +this.url +'annee/' + annee);
    return this.http.delete<Number>(this.url + 'annee/'+ annee);
  }

  public addBudgetEntiteAdministratif(){
    console.log( 'montantTotal ='+ this.budgetEntiteAdministratif.montantTotal);
    console.log('pourcentage='+this.budgetEntiteAdministratif.pourcentage);
 console.log('montantInvestissement='+this.budgetEntiteAdministratif.montantInvestissement);
 console.log('montantFonctionnement='+this.budgetEntiteAdministratif.montantFonctionnement);

    this.budgetEntiteAdministratif.montantTotal +=this.budget.montantTotal * this.budgetEntiteAdministratif.pourcentage;
  this.budgetEntiteAdministratif.montantInvestissement +=this.budget.montantInvestissement * this.budgetEntiteAdministratif.pourcentage;
  this.budgetEntiteAdministratif.montantFonctionnement +=this.budget.montantFonctionnement * this.budgetEntiteAdministratif.pourcentage;
    this.budget.budgetEntiteAdministratifliste.push(this.cloneBudgetEntiteAdministratif(this.budgetEntiteAdministratif) );

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

  private cloneBudgetEntiteAdministratif(budgetEntiteAdministratif: BudgetEntiteAdministratif) {
    const myClone = new BudgetEntiteAdministratif();
    myClone.ref = budgetEntiteAdministratif.ref;
    myClone.montantInvestissement =budgetEntiteAdministratif.montantInvestissement;
    myClone.montantFonctionnement =budgetEntiteAdministratif.montantFonctionnement;
    return myClone ;
  }
  private cloneBudget(budget: Budget) {
    const myClone = new Budget();
    myClone.annee = budget.annee;
    myClone.montantTotal = budget.montantTotal;
    return myClone ;
  }
}
