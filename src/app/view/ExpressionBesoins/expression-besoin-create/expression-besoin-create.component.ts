import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from 'src/app/controller/service/expression-besoin.service';
import {ExpressionbesoinproduitService} from "../../../controller/service/expressionbesoinproduit.service";
import {ExpressionBesoin} from 'src/app/controller/model/expression-besoin';
import {ExpressionBesoinProduit} from "../../../controller/model/expression-besoin-produit";



@Component({
  selector: 'app-expression-besoin-create',
  templateUrl: './expression-besoin-create.component.html',
  styleUrls: ['./expression-besoin-create.component.css']
})
export class ExpressionBesoinCreateComponent implements OnInit{




  constructor(private expressionBesoinService: ExpressionBesoinService, private expressionBesoinProduitService: ExpressionbesoinproduitService) {
  }

  ngOnInit(): void {
    this.findAll();

  }

  public deleteByCode(expressionBesoin: ExpressionBesoin , index: number):void{
    console.log('haa code' + expressionBesoin.code);
    this.expressionBesoinService.deleteByCode(expressionBesoin.code).subscribe(data => {
      if (data > 0){
        this.expressionBesoins.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
  }
 /* public deleteByCodee(expressionBesoinProduit: ExpressionBesoinProduit , index: number):void{
    console.log('haa code' + expressionBesoinProduit.code);
    this.expressionBesoinProduitService.deleteByCode(expressionBesoinProduit.code).subscribe(data => {
      if (null != data){
        this.expressionBesoinProduits.splice(index, 1);
      }else{
        alert('DEL ERROR');
        console.log(data);
      }
    });
  }*/
  public findAll():void{
    this.expressionBesoinService.findAll().subscribe(data=>this.expressionBesoins=data)
  }

  public save(expressionBesoin: ExpressionBesoin): void {
    console.log(expressionBesoin);
    this.expressionBesoinService.save(expressionBesoin).subscribe(data => {
      if (data != null) {
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR :: EXIST');
      }
    });
    for (const item of expressionBesoin.expressionBesoinsProduitList) {
      this.expressionBesoinProduitService.save(item);
    }
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

  set expressionBesoinProduit(value: ExpressionBesoinProduit) {
    this.expressionBesoinService.expressionBesoinProduit = value;
  }
  set expressionBesoins(value: ExpressionBesoin[]) {
    this.expressionBesoinService.expressionBesoins = value;
  }



}
