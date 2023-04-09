 import {Component, OnInit} from '@angular/core';

 import {BudgetEntiteAdministratifeService} from "src/app/controller/service/budget-entite-administratife.service";
 import {BudgetEntiteAdministratif} from "src/app/controller/model/budget-entite-administratif";
 import {Budget} from "../../../controller/model/budget";
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

   public findByRef(ref: string): void {
     this.budgetEntiteAdministratifeService.findByRef(ref).subscribe(data => this.BudgetEntiteAdministratif= data)
   }
   public findAll():void{
     this.budgetEntiteAdministratifeService.findByAll().subscribe(data=>this.BudgetEntiteAdministratifs=data)
   }

   public deleteByRef(budgetEntiteAdministratif: BudgetEntiteAdministratif): void {
     this.budgetEntiteAdministratifeService.deleteByRef(budgetEntiteAdministratif.ref).subscribe(data => console.log(data))
   }


   public save(budgetEntiteAdministratif:BudgetEntiteAdministratif): void {
     this.budgetEntiteAdministratifeService.save(budgetEntiteAdministratif).subscribe(data => {
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
