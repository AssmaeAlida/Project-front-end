import {ExpressionBesoinProduit} from "./expression-besoin-produit";
import {BudgetEntiteAdministratif} from "./budget-entite-administratif";

export class Budget {
   public id  : number;
 public annee: number ;
  public montantInvestissement : number ;
 public montantFonctionnement: number;
  public  montantTotal : number;
  public  budgetEntiteAdministratifliste = new Array<BudgetEntiteAdministratif>() ;


}
