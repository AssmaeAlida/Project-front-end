import {Component, OnInit} from '@angular/core';
import {ProduitService} from 'src/app/controller/service/produit.service';
import {Produit} from 'src/app/controller/model/produit.model';
import {CategorieProduit} from "../../../controller/model/categorie-produit.model";
import {Observable} from "rxjs";
import {ExpressionBesoin} from "../../../controller/model/expression-besoin";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit{
constructor(private produitService:ProduitService) {
}
ngOnInit():void {
this.findAll()
}

//Getters And Setters
  get produit(): Produit{

    return this.produitService.produit;
  }get categorieProduit(): CategorieProduit{

    return this.produitService.categorieProduit;
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

  //la methode save
  public save(produit: Produit): void {

    this.produitService.save(produit).subscribe(data =>{
      if (data !=null){
        alert(`save succ`);
      }else {
        alert('not succ')
      }
    });
  }
  public findAll(): void{
    this.produitService.findAll().subscribe(data => this.produits=data)
  }

}
