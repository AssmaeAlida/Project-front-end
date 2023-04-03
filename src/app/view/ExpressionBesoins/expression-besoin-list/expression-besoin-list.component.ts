import {Component, OnInit} from '@angular/core';
import {ExpressionBesoin} from 'src/app/controller/model/expression-besoin';
import {ExpressionBesoinService} from 'src/app/controller/service/expression-besoin.service';

@Component({
  selector: 'app-expression-besoin-list',
  templateUrl: './expression-besoin-list.component.html',
  styleUrls: ['./expression-besoin-list.component.css']
})
export class ExpressionBesoinListComponent implements OnInit{
  constructor(private expressionBesoinService: ExpressionBesoinService) {
  }
ngOnInit(): void {
    this.findAll();
}
  public findAll():void{
    this.expressionBesoinService.findAll().subscribe(data => this.expressionBesoins = data);
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
  get expressionBesoin(): ExpressionBesoin {

    return this.expressionBesoinService.expressionBesoin;
  }

  set expressionBesoin(value: ExpressionBesoin) {
    this.expressionBesoinService.expressionBesoin = value;
  }

  get expressionBesoins(): Array<ExpressionBesoin> {

    return this.expressionBesoinService.expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this.expressionBesoinService.expressionBesoins = value;
  }

}
