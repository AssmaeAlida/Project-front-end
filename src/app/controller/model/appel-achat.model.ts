import {CategorieAppelAchat} from "./categorie-appel-achat.model";
import {AppelAchatProduit} from "./appel-achat-produit.model";

export class AppelAchat {
  public id!: number;
  public ref!: String;
  public dateAppelAchat!: number;
  public totale!: number;
  public appelAchatProduit!: AppelAchatProduit;
  public appelAchatProduits!: Array<AppelAchatProduit>;
  public categorieAppelAchat!: CategorieAppelAchat;
}
