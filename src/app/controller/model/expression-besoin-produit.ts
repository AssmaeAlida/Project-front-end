import {ExpressionBesoin} from "./expression-besoin";
import {Produit} from "./produit.model";

export class ExpressionBesoinProduit  {
  public id: number;
  public code: string;
  public produit: Produit;
  public expressionBesoin: ExpressionBesoin;
  public quantite: number;
  public quantiteAccordee: number;
  public quantiteDemandee: number;
  public quantiteReception: number;
  public quantiteLivraison: number;


}
