import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/class/article';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  serviceList : ShoppingListService
  constructor(private list : ShoppingListService) {
    this.serviceList = list
   }

  ngOnInit(): void {
  }

  addList(name : string, price : any){
    if(name == "") {
      name = "Product"
    }
    if(price == "" || isNaN(price)) {
      price = 0
    }
    this.serviceList.shoppingList.push(new Article(name, price))
  }


}
