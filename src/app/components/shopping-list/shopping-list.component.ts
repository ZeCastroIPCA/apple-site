import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  extend(div : HTMLDivElement, secondDiv : HTMLDivElement){
    div.style.animation="height-half 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
    setTimeout(()=>{
      secondDiv.style.animation="opacitated 0.5s ease-in-out",
      secondDiv.style.display="flex"
    }, 510);

  }

}
