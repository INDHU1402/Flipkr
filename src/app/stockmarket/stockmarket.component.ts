import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stockmarket',
  templateUrl: './stockmarket.component.html',
  styleUrls: ['./stockmarket.component.css']
})
export class StockmarketComponent implements OnInit {

  formatLabel1(value: number) {
    this.price1 =value;
    return value;
  }
  formatLabel2(value:number) {
    this.price2 =value;
    return value;
  }
  
  NSE = '/assets/stockdata/json/NSE.json';
  BSE = '/assets/stockdata/json/BSE.json';

  price1:number;
  price2:number;
  NSEData: any;
  BSEData: any;
  lastNSE:any;
  lastBSE:any;
  adjcloseNSE: any;
  adjcloseBSE: any;
  lowNSE: any = [];
  highNSE: any = [];
  lowBSE: any = [];
  highBSE: any = [];
  maxlow1:number;
  minlow1:number;
  maxhigh1:number;
  minhigh1:number;
  maxlow2:number;
  minlow2:number;
  maxhigh2:number;
  minhigh2:number;
  last52lowNSE: any;
  last52highNSE: any;
  last52lowBSE: any;
  last52highBSE: any;
  isNSE:boolean;
  isBSE: boolean;
  constructor(private user: UserService) { }

  ngOnInit() {
  }

  
  getNSEData() {
    this.user.getdata(this.NSE).subscribe(data => {
      
      this.NSEData = data;
      this.lastNSE = this.NSEData[this.NSEData.length-1];
      this.adjcloseNSE = this.lastNSE["Adj Close"];
  
      const n = this.NSEData.length;
      for(let i = 0; i < n; i++) { 
        let lvalue = Number(this.NSEData[i].Low);
        let hvalue = Number(this.NSEData[i].High);
        if(!isNaN(lvalue)) {
          this.lowNSE.push(lvalue);
        }
        if(!isNaN(hvalue)) {
          this.highNSE.push(hvalue);
        }
      }

      this.isNSE = true;
      this.isBSE = false;

      this.last52lowNSE = this.lowNSE.slice(-52);
      this.maxlow1 = Math.max.apply(null, this.last52lowNSE);
      this.minlow1 = Math.min.apply(null, this.last52lowNSE);

      this.last52highNSE = this.highNSE.slice(-52);
      this.maxhigh1 = Math.max.apply(null, this.last52highNSE);
      this.minhigh1 = Math.min.apply(null, this.last52highNSE);

    });
  }
  
  getBSEData() {
    this.user.getdata(this.BSE).subscribe(data => {
      
      this.BSEData = data;
      this.lastBSE = this.BSEData[this.BSEData.length-1];
      this.adjcloseBSE = this.lastBSE["Adj Close"];
  
      const n = this.BSEData.length;
      for(let i = 0; i < n; i++) { 
        let lvalue = Number(this.BSEData[i].Low);
        let hvalue = Number(this.BSEData[i].High);
        if(!isNaN(lvalue)) {
          this.lowBSE.push(lvalue);
        }
        if(!isNaN(hvalue)) {
          this.highBSE.push(hvalue);
        }
      }

      this.isNSE = false;
      this.isBSE = true;

      this.last52lowBSE = this.lowBSE.slice(-52);
      this.maxlow2 = Math.max.apply(null, this.last52lowBSE);
      this.minlow2 = Math.min.apply(null, this.last52lowBSE);

      this.last52highBSE = this.highBSE.slice(-52);
      this.maxhigh2 = Math.max.apply(null, this.last52highBSE);
      this.minhigh2 = Math.min.apply(null, this.last52highBSE);

    });
  }
}