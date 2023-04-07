import {CategorieAppelAchat} from "./categorie-appel-achat.model";
import {AppelAchatProduit} from "./appel-achat-produit.model";

export class AppelAchat {
  public id!: number;
  public ref!: String;
  public dateAppelAchat!: Date;
  public totale!: number;
  public appelAchatProduits = new Array<AppelAchatProduit>();
  public appelAchatProduit: AppelAchatProduit;
  public categorieAppelAchat!: CategorieAppelAchat;
}
