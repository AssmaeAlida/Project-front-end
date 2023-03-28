import {Component, OnInit} from '@angular/core';
import {ExpressinBesoinService} from 'src/app/controller/service/expressin-besoin.service';
import {ExpressionBesoin} from 'src/app/controller/model/expression-besoin';

@Component({
  selector: 'app-expression-besoin-create',
  templateUrl: './expression-besoin-create.component.html',
  styleUrls: ['./expression-besoin-create.component.css']
})
export class ExpressionBesoinCreateComponent implements OnInit {
  constructor(private expressionBesoinService: ExpressinBesoinService) {
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

  get expressinBesoin(): ExpressionBesoin {

    return this.expressionBesoinService.expressinBesoin;
  }

  set expressinBesoin(value: ExpressionBesoin) {
    this.expressionBesoinService.expressinBesoin = value;
  }

  get expressionBesoins(): Array<ExpressionBesoin> {

    return this.expressionBesoinService.expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this.expressionBesoinService.expressionBesoins = value;
  }


}
