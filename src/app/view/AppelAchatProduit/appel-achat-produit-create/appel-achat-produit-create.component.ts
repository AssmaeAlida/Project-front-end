import {Component, OnInit} from '@angular/core';
import {AppelAchatProduitService} from "../../../controller/service/appel-achat-produit.service";
import {AppelAchat} from "../../../controller/model/appel-achat.model";
import {AppelAchatProduit} from "../../../controller/model/appel-achat-produit.model";
import {Produit} from "../../../controller/model/produit.model";

@Component({
  selector: 'app-appel-achat-produit-create',
  templateUrl: './appel-achat-produit-create.component.html',
  styleUrls: ['./appel-achat-produit-create.component.css']
})
export class AppelAchatProduitCreateComponent implements OnInit{
  constructor(private _appelAchatProduitService: AppelAchatProduitService) {}

  ngOnInit(): void {
  }

  public save(appelAchatProduit: AppelAchatProduit): void{
    this._appelAchatProduitService.save(appelAchatProduit).subscribe(data => {
      if(data != null)
        alert('save succes');
      else
        alert('save error')
    });
  }
  get produit(): Produit{
    return this._appelAchatProduitService.produit;
  }
  set produit(value: Produit) {
    this._appelAchatProduitService.produit = value;
  }
  get appelAchatProduit(): AppelAchatProduit{
    return this._appelAchatProduitService.appelAchatProduit;
  }
  set appelAchatProduit(value: AppelAchatProduit) {
    this._appelAchatProduitService.appelAchatProduit = value;
  }
  get AppelAchat(): AppelAchat {
    return this._appelAchatProduitService.AppelAchat;
  }

  set AppelAchat(value: AppelAchat) {
    this._appelAchatProduitService.AppelAchat = value;
  }
  get appelAchatProduitService(): AppelAchatProduitService {
    return this._appelAchatProduitService;
  }

  set appelAchatProduitService(value: AppelAchatProduitService) {
    this._appelAchatProduitService = value;
  }
}
