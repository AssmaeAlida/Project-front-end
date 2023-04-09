import {Budget} from "./budget";
import {CategorieEntiteAdministratif} from "./categorie-entite-administratif.model";

export class BudgetEntiteAdministratif {
 public id: number ;
 public ref: string;

 public montantInvestissement : number;
 public  montantFonctionnement : number;
 public montantTotal: number ;
 public  budget = new Budget();
 public categorieEntiteAdministratif = new CategorieEntiteAdministratif();
  public  pourcentage : number;

  constructor() {
    this.montantTotal=0;
    this.montantFonctionnement=0;
    this.montantInvestissement=0;
  }


}
