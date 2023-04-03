import {CategorieAppelAchat} from "./categorie-appel-achat.model";

export class AppelAchat {
  public id!: number;
  public ref!: String;
  public dateAppelAchat!: number;
  public totale!: number;
  public categorieAppelAchat!: CategorieAppelAchat;
}
