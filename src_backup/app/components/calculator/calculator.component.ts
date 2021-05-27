import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1 : number = 0
  num2 : number = 0
  signal : string = "+"

  res : number = 0

  result(){
    this.res = parseFloat(eval(this.num1 + this.signal + this.num2).toFixed(4))
  }


}
