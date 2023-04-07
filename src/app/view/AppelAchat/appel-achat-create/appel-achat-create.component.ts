import {Component, OnInit} from '@angular/core';
import {AppelAchatService} from "src/app/controller/service/appel-achat.service";
import {AppelAchat} from "src/app/controller/model/appel-achat.model";
import {CategorieAppelAchat} from "src/app/controller/model/categorie-appel-achat.model";
import {AppelAchatProduitService} from "src/app/controller/service/appel-achat-produit.service";
import {AppelAchatProduit} from "../../../controller/model/appel-achat-produit.model";

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
      if(data  > 0) this.appelAchatProduits.splice(index, 1);
      else alert('error');
    });
  }
  get appelAchat(): AppelAchat {
    return this.appelAchatService.appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this.appelAchatService.appelAchat = value;
  }
  get appelAchatProduit(): AppelAchatProduit {
    return this.appelAchatService.appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this.appelAchatService.appelAchatProduit = value;
  }

  set appelAchatProduits(value: Array<AppelAchat>) {
    this.appelAchatService.listAppelAchat = value;
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
    this.appelAchatService.listAppelAchat = value;
  }
}
