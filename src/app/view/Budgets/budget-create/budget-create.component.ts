import {Component, OnInit} from '@angular/core';
import {BudgetService} from "src/app/controller/service/budget.service";
import {Budget} from "src/app/controller/model/budget";
import {BudgetEntiteAdministratif} from "../../../controller/model/budget-entite-administratif";
import {EntiteAdministratif} from "../../../controller/model/entite-administratif.model";


@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.css']
})
 export class BudgetCreateComponent  implements OnInit{


  constructor(private  budgetService : BudgetService
  ) {}

  ngOnInit(): void {
  }

  public findByAnnee(annee: number): void {
    this.budgetService.findByAnnee(annee).subscribe(data => this.budget = data)
  }
  public findAll():void{
    this.budgetService.findByAll().subscribe(data=>this.budgets=data)
  }

  public deleteByAnnee(budget: Budget): void {
    this.budgetService.deleteByAnnee(budget.annee).subscribe(data => console.log(data))
  }
  public save(budget: Budget): void {
    this.budgetService.save(budget).subscribe(data => {
      if (data != null) {
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: ANNEE EXIST');
      }
    })
  }

  get budget(): Budget {
    return this.budgetService.budget;
  }

  set budget(value: Budget) {

    this.budgetService.budget = value;
  }

  get budgets(): Budget[] {

    return this.budgetService.budgets;
  }

  set budgets (value: Budget[]) {
    this.budgetService.budgets = value;
  }

  get budgetEntiteAdministratif(): BudgetEntiteAdministratif {

    return this.budgetService.budgetEntiteAdministratif;
  }

  set budgetEntiteAdministratif(value: BudgetEntiteAdministratif) {
    this.budgetService.budgetEntiteAdministratif = value;
  }


}


