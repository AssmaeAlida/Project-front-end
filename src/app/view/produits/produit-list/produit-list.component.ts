import {Component, OnInit} from '@angular/core';
import {ProduitService} from 'src/app/controller/service/produit.service';
import {Produit} from 'src/app/controller/model/produit.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit{
constructor(private produitService:ProduitService) {
}
  ngOnInit():void {
    this.produitService.findAll();
  }
  public deleteByCode( produit: Produit ,index: number):void{
        this.produits.splice(index, 1);

  }
  public update( index: number,produit:Produit){
   this.produitService.update(index,produit);

  }
  public findAll():void{
  this.produitService.findAll();
  }

  get produit(): Produit {
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
