import {Component, OnInit} from '@angular/core';
import {ExpressionbesoinproduitService} from 'src/app/controller/service/expressionbesoinproduit.service';
import {ExpressionBesoinProduit} from 'src/app/controller/model/expression-besoin-produit';

@Component({
  selector: 'app-expression-besoin-produit-list',
  templateUrl: './expression-besoin-produit-list.component.html',
  styleUrls: ['./expression-besoin-produit-list.component.css']
})
export class ExpressionBesoinProduitListComponent implements OnInit{
  constructor(private expressionBesoinProduitService: ExpressionbesoinproduitService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll():void{
    this.expressionBesoinProduitService.findAll().subscribe(data => this.expressionBesoinProduits = data)
  }
  public deleteByCode(expressionBesoinProduit: ExpressionBesoinProduit , index: number):void{
    console.log('haa code' + expressionBesoinProduit.code);
    this.expressionBesoinProduitService.deleteByCode(expressionBesoinProduit.code).subscribe(data => {
      if (data > 0){
        this.expressionBesoinProduits.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
  }
  get expressinBesoinProduit(): ExpressionBesoinProduit {

    return this.expressionBesoinProduitService.expressionBesoinProduit;
  }

  set expressinBesoinProduit(value: ExpressionBesoinProduit) {
    this.expressionBesoinProduitService.expressionBesoinProduit = value;
  }

  get expressionBesoinProduits(): Array<ExpressionBesoinProduit> {

    return this.expressionBesoinProduitService.expressionBesoinProduits;
  }

  set expressionBesoinProduits(value: Array<ExpressionBesoinProduit>) {
    this.expressionBesoinProduitService.expressionBesoinProduits = value;
  }

}
