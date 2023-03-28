import {Component, OnInit} from '@angular/core';
import {EntiteAdministratifService} from "../../../controller/service/entite-administratif.service";
import {EntiteAdministratif} from "../../../controller/model/entite-administratif.model";
import {Subscriber} from "rxjs";

@Component({
  selector: 'app-entite-administratif-create',
  templateUrl: './entite-administratif-create.component.html',
  styleUrls: ['./entite-administratif-create.component.css']
})
export class EntiteAdministratifCreateComponent implements OnInit{
  ngOnInit(): void {
  }
   constructor(private entiteAdministratifService:EntiteAdministratifService) {
   }
   public findByCode( code: String):void{
this.entiteAdministratifService.findByCode(code).subscribe(data=>this.entiteAdministratif=data)
   }
  public deleteByCode( entiteAdministratif :EntiteAdministratif):void{
    this.entiteAdministratifService.deleteByCode(entiteAdministratif.code).subscribe(data =>console.log(data))
  }
  public save():void{
    this.entiteAdministratifService.save(this.entiteAdministratif ).subscribe(data =>{
        if(data>0){
         alert('bien fait');
        }
        else {
          alert('echouer')
        }
    }
    )
  }



  get entiteAdministratif(): EntiteAdministratif {

    return this.entiteAdministratifService.entiteAdministratif;
  }

  set entiteAdministratif(value: EntiteAdministratif) {
    this.entiteAdministratifService.entiteAdministratif = value;
  }
}
