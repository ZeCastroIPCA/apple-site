import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/class/article';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  serviceList : ShoppingListService
  constructor(private list : ShoppingListService) {
    this.serviceList = list
  }

  ngOnInit(): void {
  }

  buy(art : Article, div : HTMLDivElement){
    art.cart = true
    div.style.backgroundColor="rgba(0, 173, 216, 0.25)"
  }

}
