import {Component, OnInit} from '@angular/core';
import {BudgetService} from "../../../controller/service/budget.service";

import {Budget} from "../../../controller/model/budget";
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit{
  constructor(private  budgetService : BudgetService) {
  }
  public findAll():void{
    this.budgetService.findByAll().subscribe(
      data=> this.budgetService.budgets = data
    );
  }
  ngOnInit(): void {
    this.findAll();
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

  set budgets(value: Budget[]) {
    this.budgetService.budgets = value;
  }
}
