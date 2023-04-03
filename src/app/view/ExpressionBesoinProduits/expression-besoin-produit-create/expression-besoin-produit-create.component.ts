import {Component, OnInit} from '@angular/core';
import {ExpressionbesoinproduitService} from 'src/app/controller/service/expressionbesoinproduit.service';
import {ExpressionBesoinProduit} from 'src/app/controller/model/expression-besoin-produit';

@Component({
  selector: 'app-expression-besoin-produit-create',
  templateUrl: './expression-besoin-produit-create.component.html',
  styleUrls: ['./expression-besoin-produit-create.component.css']
})
export class ExpressionBesoinProduitCreateComponent implements OnInit{


  constructor(private expressionBesoinProduitService: ExpressionbesoinproduitService) {
  }

  ngOnInit(): void {
  }

  public save(expressionBesoinProduit: ExpressionBesoinProduit): void {
    this.expressionBesoinProduitService.save(expressionBesoinProduit).subscribe(data => {
      if (data != null) {
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR :: EXIST');
      }
    });
  }

  get expressinBesoinProduit(): ExpressionBesoinProduit {

    return this.expressionBesoinProduitService.expressionBesoinProduit;
  }

  set expressinBesoinProduit(value : ExpressionBesoinProduit) {
    this.expressionBesoinProduitService.expressionBesoinProduit = value;
  }

  get expressionBesoinProduits(): Array<ExpressionBesoinProduit> {

    return this.expressionBesoinProduitService.expressionBesoinProduits;
  }

  set expressionBesoinProduits(value: Array<ExpressionBesoinProduit>) {
    this.expressionBesoinProduitService.expressionBesoinProduits = value;
  }

}
