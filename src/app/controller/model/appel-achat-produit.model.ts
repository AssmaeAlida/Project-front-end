import {AppelAchat} from "./appel-achat.model";
import {Produit} from "./produit.model";

export class AppelAchatProduit {
  public id!: number;
  public ref!: string;
  public quantite!: number;
  public quantiteLivraison!: number;
  public quantiteReception!: number;
  public appelAchat!: AppelAchat;
  public produit!: Produit;

}
