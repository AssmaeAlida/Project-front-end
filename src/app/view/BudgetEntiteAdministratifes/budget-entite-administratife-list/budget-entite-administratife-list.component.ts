import {Component, OnInit} from '@angular/core';
import {BudgetEntiteAdministratifeService} from "../../../controller/service/budget-entite-administratife.service";
import {BudgetEntiteAdministratif} from "../../../controller/model/budget-entite-administratif";
import {AppelAchat} from "../../../controller/model/appel-achat.model";
import {EntiteAdministratif} from "../../../controller/model/entite-administratif.model";

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
  public deleteByCode(budgetEntiteAdministratif: BudgetEntiteAdministratif , index: number):void{

    this._budgetEntiteAdministratifeService.deleteByRef(budgetEntiteAdministratif.ref).subscribe(data => {
      if (data > 0){
        this.BudgetEntiteAdministratifs.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
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
