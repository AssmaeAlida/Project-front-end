import {Component, OnInit} from '@angular/core';
import {CategorieEntiteAdministratifService} from "../../../controller/service/categorie-entite-administratif.service";
import {CategorieEntiteAdministratif} from "../../../controller/model/categorie-entite-administratif.model";
import {EntiteAdministratif} from "../../../controller/model/entite-administratif.model";

@Component({
  selector: 'app-categorie-entite-administratif-list',
  templateUrl: './categorie-entite-administratif-list.component.html',
  styleUrls: ['./categorie-entite-administratif-list.component.css']
})
export class CategorieEntiteAdministratifListComponent implements  OnInit{
  ngOnInit(): void {
    this.findAll()
  }
  constructor(private categorieEntiteAdministratifService :CategorieEntiteAdministratifService) {
  }
  public findAll():void{
    this.categorieEntiteAdministratifService.findAll().subscribe(data=>this.categorieEntiteAdministratifs=data)
  }
  public deleteByCode(categorieEntiteAdministratif: CategorieEntiteAdministratif , index: number):void{

    this.categorieEntiteAdministratifService.deleteByCode(categorieEntiteAdministratif.code).subscribe(data => {
      if (data > 0){
        this.categorieEntiteAdministratifs.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
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
