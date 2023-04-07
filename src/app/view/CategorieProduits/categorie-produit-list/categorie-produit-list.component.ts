import {Component, OnInit} from '@angular/core';
import {CategorieProduitService} from "../../../controller/service/categorie-produit.service";
import {CategorieProduit} from "../../../controller/model/categorie-produit.model";

@Component({
  selector: 'app-categorie-produit-list',
  templateUrl: './categorie-produit-list.component.html',
  styleUrls: ['./categorie-produit-list.component.css']
})
export class CategorieProduitListComponent implements OnInit{


  ngOnInit(): void {
    this.findAll()
  }
  constructor(private categorieProduitService :CategorieProduitService) {
  }
  public findAll():void{
    this.categorieProduitService.findAll().subscribe(data=>this.categorieProduits=data)
  }
  public deleteByCode(categorieProduit: CategorieProduit , index: number):void{

    this.categorieProduitService.deleteByCode(categorieProduit.code).subscribe(data => {
      if (data > 0){
        this.categorieProduits.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
  }
  get categorieEntiteAdmistratif(): CategorieProduit {

    return this.categorieProduitService.categorieProduit;
  }

  set categorieEntiteAdmistratif(value: CategorieProduit) {
    this.categorieProduitService.categorieProduit = value;

  }

  get categorieProduits(): CategorieProduit[] {
    return this.categorieProduitService.categorieProduits;
  }

  set categorieProduits(value: CategorieProduit[]) {
    this.categorieProduitService.categorieProduits = value;
  }




}
