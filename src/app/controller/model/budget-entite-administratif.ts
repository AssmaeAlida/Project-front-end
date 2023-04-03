import {Budget} from "./budget";
import {CategorieEntiteAdministratif} from "./categorie-entite-administratif.model";

export class BudgetEntiteAdministratif {
  private id: number ;
  private ref: string;

  private montantInvestissement : number;
  private  montantFonctionnement : number;
  private  montantTotal: number ;
  private budget : Budget;
  private categorieEntiteAdministratif : CategorieEntiteAdministratif;
}
