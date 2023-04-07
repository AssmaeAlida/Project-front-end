import {Component, OnInit} from '@angular/core';
import {AppelAchatService} from "src/app/controller/service/appel-achat.service";
import {AppelAchat} from "src/app/controller/model/appel-achat.model";
import {AppelAchatProduit} from "src/app/controller/model/appel-achat-produit.model";
import {CategorieAppelAchat} from "src/app/controller/model/categorie-appel-achat.model";

@Component({
  selector: 'app-appel-achat-list',
  templateUrl: './appel-achat-list.component.html',
  styleUrls: ['./appel-achat-list.component.css']
})
export class AppelAchatListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
constructor(private appelAchatService: AppelAchatService) {
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
    return this.appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this.appelAchat = value;
  }
  get appelAchatProduit(): AppelAchatProduit {
    return this.appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this.appelAchatProduit = value;
  }

  get listAppelAchat(): AppelAchat[] {
    return this.listAppelAchat;
  }

  set listAppelAchat(value: AppelAchat[]) {
    this.listAppelAchat = value;
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this.categorieAppelAchat = value;
  }
}
