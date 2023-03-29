import {Component, OnInit} from '@angular/core';
import {EntiteAdministratif} from "../../../controller/model/entite-administratif.model";
import {EntiteAdministratifService} from "../../../controller/service/entite-administratif.service";

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

}
