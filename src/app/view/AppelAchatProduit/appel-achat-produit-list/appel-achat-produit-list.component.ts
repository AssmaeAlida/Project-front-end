import {Component, OnInit} from '@angular/core';
import {AppelAchatProduitService} from "../../../controller/service/appel-achat-produit.service";
import {AppelAchatProduit} from "../../../controller/model/appel-achat-produit.model";
import {Produit} from "../../../controller/model/produit.model";

@Component({
  selector: 'app-appel-achat-produit-list',
  templateUrl: './appel-achat-produit-list.component.html',
  styleUrls: ['./appel-achat-produit-list.component.css']
})
export class AppelAchatProduitListComponent implements OnInit{
  ngOnInit(): void {
    this.finfAll()
  }
constructor(private _appelAchatProduitService: AppelAchatProduitService) {
}
public finfAll():void{
    this._appelAchatProduitService.findAll().subscribe(data => this.appelAchatProduits = data)
}
  get appelAchatProduit(): AppelAchatProduit {
    return this.appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this.appelAchatProduit = value;
  }

  get produit(): Produit {
    return this.produit;
  }

  set produit(value: Produit) {
    this.produit = value;
  }
  get appelAchatProduits(): AppelAchatProduit[]{
    return this.appelAchatProduits;
  }
  set appelAchatProduits(value){
    this.appelAchatProduits = value;
  }
  get appelAchatProduitService(): AppelAchatProduitService {
    return this._appelAchatProduitService;
  }

  set appelAchatProduitService(value: AppelAchatProduitService) {
    this._appelAchatProduitService = value;
  }
}
