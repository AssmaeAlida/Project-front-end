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

  constructor(private _appelAchatService: AppelAchatService) {}

  ngOnInit(): void{}

  public save(appelAchat: AppelAchat): void{
    this._appelAchatService.save(appelAchat).subscribe(data => {
      if(data != null)
        alert('save succes');
      else
        alert('save error')
    });
  }
  get appelAchat(): AppelAchat {
    return this._appelAchatService.appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this._appelAchatService.appelAchat = value;
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this._appelAchatService.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this._appelAchatService.categorieAppelAchat = value;
  }

}
