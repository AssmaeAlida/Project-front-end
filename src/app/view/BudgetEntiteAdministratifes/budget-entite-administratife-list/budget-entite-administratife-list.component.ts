import {Component, OnInit} from '@angular/core';
import {BudgetEntiteAdministratifeService} from "../../../controller/service/budget-entite-administratife.service";
import {BudgetEntiteAdministratif} from "../../../controller/model/budget-entite-administratif";

@Component({
  selector: 'app-budget-entite-administratife-list',
  templateUrl: './budget-entite-administratife-list.component.html',
  styleUrls: ['./budget-entite-administratife-list.component.css']
})
export class BudgetEntiteAdministratifeListComponent  implements  OnInit{
  constructor(private _budgetEntiteAdministratifeService : BudgetEntiteAdministratifeService) {
  }
  public findAll():void{
    this._budgetEntiteAdministratifeService.findByAll().subscribe(
      data=> this._budgetEntiteAdministratifeService.BudgetEntiteAdministratifs= data
    );
  }
 ngOnInit(): void {
    this.findAll();
 }

  get BudgetEntiteAdministratif(): BudgetEntiteAdministratif {

    return this._budgetEntiteAdministratifeService.BudgetEntiteAdministratif ;
  }

  set BudgetEntiteAdministratif(value: BudgetEntiteAdministratif) {
    this._budgetEntiteAdministratifeService.BudgetEntiteAdministratif = value;
  }

  get BudgetEntiteAdministratifs(): BudgetEntiteAdministratif[] {

    return this._budgetEntiteAdministratifeService.BudgetEntiteAdministratifs;
  }

  set BudgetEntiteAdministratifs(value: BudgetEntiteAdministratif[]) {
    this._budgetEntiteAdministratifeService.BudgetEntiteAdministratifs = value;
  }

}
