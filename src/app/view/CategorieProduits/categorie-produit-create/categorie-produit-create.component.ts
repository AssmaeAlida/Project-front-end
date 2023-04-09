import {Component, OnInit} from '@angular/core';
import {CategorieProduitService} from 'src/app/controller/service/categorie-produit.service';
import {CategorieProduit} from 'src/app/controller/model/categorie-produit.model';

@Component({
  selector: 'app-categorie-produit-create',
  templateUrl: './categorie-produit-create.component.html',
  styleUrls: ['./categorie-produit-create.component.css']
})
export class CategorieProduitCreateComponent implements OnInit{
  ngOnInit(): void {
    this.findAll()
  }
  constructor(private categorieProduitService:CategorieProduitService) {}

//Getters And Setters
  get categorieProduit(): CategorieProduit {

    return this.categorieProduitService.categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this.categorieProduitService.categorieProduit = value;

  }

  get categorieProduits(): CategorieProduit[] {
    return this.categorieProduitService.categorieProduits;
  }

  set categorieProduits(value: CategorieProduit[]) {
    this.categorieProduitService.categorieProduits = value;
  }


  //la methode save
  public save(categorieProduit:CategorieProduit):void{
    this.categorieProduitService.save(categorieProduit).subscribe(data=>
    {
      if (data != null) {
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR :: EXIST');
      }
    });

  }

  //la methode deleteByCode
  public deleteByCode(categorieProduit:CategorieProduit):void{
    this.categorieProduitService.deleteByCode(categorieProduit.code).subscribe(data=>console.log(data))

  }

  //la methode findByCode
  public findByCode(code:string):void{
    this.categorieProduitService.findByCode(code).subscribe(data=>data => this.categorieProduit = data)

  }
  public findAll():void{
    this.categorieProduitService.findAll().subscribe(data=>this.categorieProduits=data)
  }

}
