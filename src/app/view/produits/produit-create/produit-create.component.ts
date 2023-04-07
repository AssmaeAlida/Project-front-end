import {Component, OnInit} from '@angular/core';
import {ProduitService} from 'src/app/controller/service/produit.service';
import {Produit} from 'src/app/controller/model/produit.model';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit{
constructor(private produitService:ProduitService) {
}
ngOnInit():void {
}
  public save(produit: Produit): void {
    this.produitService.save() ;
  }
  get produit(): Produit{

    return this.produitService.produit;
  }

  set produit(value: Produit) {
    this.produitService.produit = value;
  }

  get produits(): Array<Produit> {

    return this.produitService.produits;
  }

  set produits(value: Array<Produit>) {
    this.produitService.produits = value;
  }
}
