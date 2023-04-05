import {ExpressionBesoinProduit} from "./expression-besoin-produit";

class List<T> {
}

export class ExpressionBesoin {
  public id: number;
  public budgetEntiteAdministratif: number;
  public total: number;
  public code: string;
  public dateExpressionBesoin: Date;
  public expressionBesoinsProduits = new Array<ExpressionBesoinProduit>() ;



}
