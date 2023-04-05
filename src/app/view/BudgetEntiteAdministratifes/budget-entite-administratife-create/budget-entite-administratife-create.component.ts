 import {Component, OnInit} from '@angular/core';

 import {BudgetEntiteAdministratifeService} from "src/app/controller/service/budget-entite-administratife.service";
 import {BudgetEntiteAdministratif} from "src/app/controller/model/budget-entite-administratif";
 @Component({
  selector: 'app-budget-entite-administratife-create',
  templateUrl: './budget-entite-administratife-create.component.html',
  styleUrls: ['./budget-entite-administratife-create.component.css']
})
export class BudgetEntiteAdministratifeCreateComponent implements OnInit{

  constructor(private  budgetEntiteAdministratifeService: BudgetEntiteAdministratifeService) {
  }
 ngOnInit(): void {
 }
   public save(): void {
     this.budgetEntiteAdministratifeService.save(this.BudgetEntiteAdministratif).subscribe(data => {
       if (data != null) {
         alert('SAVE SUCCESS');
       } else {
         alert('SAVE ERROR ::: ANNEE EXIST');
       }
     })
   }



   get BudgetEntiteAdministratif(): BudgetEntiteAdministratif {

     return this.budgetEntiteAdministratifeService.BudgetEntiteAdministratif ;
   }

   set BudgetEntiteAdministratif(value: BudgetEntiteAdministratif) {
     this.budgetEntiteAdministratifeService.BudgetEntiteAdministratif = value;
   }

   get BudgetEntiteAdministratifs(): BudgetEntiteAdministratif[] {

     return this.budgetEntiteAdministratifeService.BudgetEntiteAdministratifs;
   }

   set BudgetEntiteAdministratifs(value: BudgetEntiteAdministratif[]) {
     this.budgetEntiteAdministratifeService.BudgetEntiteAdministratifs = value;
   }

 }
