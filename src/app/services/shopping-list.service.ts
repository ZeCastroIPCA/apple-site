import { Injectable } from '@angular/core'
import { Article } from '../class/article'
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  shoppingList : Array<Article> = new Array<Article>()
}
