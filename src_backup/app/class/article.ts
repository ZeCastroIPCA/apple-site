export class Article {

  name:string
  price:number
  cart:boolean

  constructor(name:string, price:number){
    this.name = name
    this.price = price
    this.cart = false
  }
}
