import {CategorieProduit} from "./categorie-produit.model";

export class Produit {
  public id: number;
  public libelle: string;
  public code: string;
  public categorieProduit=new CategorieProduit();
}
