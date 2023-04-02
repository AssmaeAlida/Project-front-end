import {Component, OnInit} from '@angular/core';
import {CategorieEntiteAdministratifService} from "../../../controller/service/categorie-entite-administratif.service";
import {CategorieEntiteAdministratif} from "../../../controller/model/categorie-entite-administratif.model";

@Component({
  selector: 'app-categorie-entite-administratif-create',
  templateUrl: './categorie-entite-administratif-create.component.html',
  styleUrls: ['./categorie-entite-administratif-create.component.css']
})
export class CategorieEntiteAdministratifCreateComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private categorieEntiteAdministratifService:CategorieEntiteAdministratifService) {
  }
  public save(categorieEntiteAdministratif:CategorieEntiteAdministratif):void{
    this.categorieEntiteAdministratifService.save(categorieEntiteAdministratif).subscribe(data=>
    {
      if (data>0){
        alert('success');
      }else {
        alert('echouer');
      }
    })

  }
  public deleteByCode(categorieEntiteAdministratif:CategorieEntiteAdministratif):void{
    this.categorieEntiteAdministratifService.deleteByCode(categorieEntiteAdministratif.code).subscribe(data=>console.log(data))

  }
  public findByCode(code:String):void{
    this.categorieEntiteAdministratifService.findByCode(code).subscribe(data=>data => this.categorieEntiteAdmistratif = data)

  }

  get categorieEntiteAdmistratif(): CategorieEntiteAdministratif {

    return this.categorieEntiteAdministratifService.categorieEntiteAdmistratif;
  }

  set categorieEntiteAdmistratif(value: CategorieEntiteAdministratif) {
    this.categorieEntiteAdministratifService.categorieEntiteAdmistratif = value;

  }

  get categorieEntiteAdministratifs(): CategorieEntiteAdministratif[] {
    return this.categorieEntiteAdministratifService.categorieEntiteAdministratifs;
  }

  set categorieEntiteAdministratifs(value: CategorieEntiteAdministratif[]) {
    this.categorieEntiteAdministratifService.categorieEntiteAdministratifs = value;
  }
}
