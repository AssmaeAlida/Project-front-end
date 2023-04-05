import {Component, OnInit} from '@angular/core';
import {EntiteAdministratif} from "../../../controller/model/entite-administratif.model";
import {EntiteAdministratifService} from "../../../controller/service/entite-administratif.service";
import {ExpressionBesoinProduit} from "../../../controller/model/expression-besoin-produit";
import {CategorieEntiteAdministratif} from "../../../controller/model/categorie-entite-administratif.model";

@Component({
  selector: 'app-entite-administratif-list',
  templateUrl: './entite-administratif-list.component.html',
  styleUrls: ['./entite-administratif-list.component.css']
})
export class EntiteAdministratifListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll()
  }
  public findAll():void{
    this.entiteAdministratifService.findAll().subscribe(data =>this.entiteAdministratifs=data);
  }
  public deleteByCode(entiteAdministratif: EntiteAdministratif , index: number):void{

    this.entiteAdministratifService.deleteByCode(entiteAdministratif.code).subscribe(data => {
      if (data > 0){
        this.entiteAdministratifs.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
  }
  constructor(private entiteAdministratifService: EntiteAdministratifService ) {
  }
  get entiteAdministratif(): EntiteAdministratif {

    return this.entiteAdministratifService.entiteAdministratif;
  }

  set entiteAdministratif(value: EntiteAdministratif) {
    this.entiteAdministratifService.entiteAdministratif = value;
  }
  get entiteAdministratifs(): EntiteAdministratif[] {

    return this.entiteAdministratifService.entiteAdministratifs;
  }

  set entiteAdministratifs(value: EntiteAdministratif[]) {
    this.entiteAdministratifService.entiteAdministratifs = value;
  }
  get categorieEntiteAdministratif(): CategorieEntiteAdministratif {

    return this.entiteAdministratifService.categorieEntiteAdministratif;
  }

  set categorieEntiteAdministratif(value: CategorieEntiteAdministratif) {
    this.entiteAdministratifService.categorieEntiteAdministratif = value;
  }
}
