import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from 'src/app/controller/service/expression-besoin.service';
import {ExpressionBesoin} from 'src/app/controller/model/expression-besoin';
import {ExpressionBesoinProduit} from "../../../controller/model/expression-besoin-produit";



@Component({
  selector: 'app-expression-besoin-create',
  templateUrl: './expression-besoin-create.component.html',
  styleUrls: ['./expression-besoin-create.component.css']
})
export class ExpressionBesoinCreateComponent implements OnInit{




  constructor(private expressionBesoinService: ExpressionBesoinService) {
  }

  ngOnInit(): void {
  }
  public save(expressionBesoin: ExpressionBesoin): void {
    this.expressionBesoinService.save(expressionBesoin).subscribe(data => {
      if (data != null) {
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR :: EXIST');
      }
    });
  }
  public addExpressionBesoinProduit(): void {
    this.expressionBesoinService.addExpressionBesoinProduit();

  }
  get expressionBesoin(): ExpressionBesoin {

    return this.expressionBesoinService.expressionBesoin;
  }
  get expressionBesoinProduit(): ExpressionBesoinProduit {

    return this.expressionBesoinService.expressionBesoinProduit;
  }

  set expressionBesoin(value: ExpressionBesoin) {
    this.expressionBesoinService.expressionBesoin = value;
  }

  get expressionBesoins(): Array<ExpressionBesoin> {

    return this.expressionBesoinService.expressionBesoins;
  }

  set expressionBesoinProduits(value: Array<ExpressionBesoin>) {
    this.expressionBesoinService.expressionBesoins = value;
  }

}
