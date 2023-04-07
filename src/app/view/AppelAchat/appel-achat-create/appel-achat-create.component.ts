import {Component, OnInit} from '@angular/core';
import {AppelAchatService} from "src/app/controller/service/appel-achat.service";
import {AppelAchat} from "../../../controller/model/appel-achat.model";
import {CategorieAppelAchat} from "../../../controller/model/categorie-appel-achat.model";
import {AppelAchatProduitService} from "../../../controller/service/appel-achat-produit.service";

@Component({
  selector: 'app-appel-achat-create',
  templateUrl: './appel-achat-create.component.html',
  styleUrls: ['./appel-achat-create.component.css']
})
export class AppelAchatCreateComponent implements OnInit {

  constructor(private appelAchatService: AppelAchatService, private appelAchatProduitService: AppelAchatProduitService) {}

  ngOnInit(): void{
    this.findAll();
  }

  public save(appelAchat: AppelAchat): void{
    this.appelAchatService.save(appelAchat).subscribe(data => {
      if(data != null)
        alert('save succes');
      else
        alert('save error')
    });
    for (const item of appelAchat.appelAchatProduits){
      this.appelAchatProduitService.save(item);
    }
  }
  public addAppelAchatProduit(): void{
    this.appelAchatService.addAppelAchatProduit();
  }

  public findAll():void{
    this.appelAchatService.findAll().subscribe(data => this.listAppelAchat = data);
  }
  public deleteByRef(appelAchat: AppelAchat , index: number):void{
    this.appelAchatService.deleteByRef(appelAchat.ref).subscribe(data =>{
      if(data  > 0) this.listAppelAchat.splice(index, 1);
      else alert('error');
    });
  }
  get appelAchat(): AppelAchat {
    return this.appelAchatService.appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this.appelAchatService.appelAchat = value;
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this.appelAchatService.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this.appelAchatService.categorieAppelAchat = value;
  }
  get listAppelAchat(): AppelAchat[] {
    return this.listAppelAchat;
  }

  set listAppelAchat(value: AppelAchat[]) {
    this.listAppelAchat = value;
  }
}
