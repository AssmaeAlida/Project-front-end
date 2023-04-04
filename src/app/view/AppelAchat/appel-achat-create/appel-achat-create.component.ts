import {Component, OnInit} from '@angular/core';
import {AppelAchatService} from "src/app/controller/service/appel-achat.service";
import {AppelAchat} from "../../../controller/model/appel-achat.model";
import {CategorieAppelAchat} from "../../../controller/model/categorie-appel-achat.model";

@Component({
  selector: 'app-appel-achat-create',
  templateUrl: './appel-achat-create.component.html',
  styleUrls: ['./appel-achat-create.component.css']
})
export class AppelAchatCreateComponent implements OnInit {

  constructor(private appelAchatService: AppelAchatService) {}

  ngOnInit(): void{}

  public save(appelAchat: AppelAchat): void{
    this.appelAchatService.save(appelAchat).subscribe(data => {
      if(data != null)
        alert('save succes');
      else
        alert('save error')
    });
  }
  public addAppelAchatProduit(): void{
    this.appelAchatService.addAppelAchatProduit();
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

}
