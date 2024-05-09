import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-managing';
import { ProductTile } from '../../models/ProductTiles';
import { Searching } from '../../services/searching';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService, private searching: Searching
  ) { }

  items: ProductTile[] = [];

  total: number = 0;

  removeFromCart(tile: ProductTile) {
    this.cartService.removeData(tile.name)
    this.items = this.cartService.getData();
    this.total = this.countTotal()
  }

  increaseQuantity(tile: ProductTile){
    tile.quantity++
    this.cartService.saveData(tile.name, JSON.stringify(tile))
    this.total = this.countTotal()
  }

  decreaseQuantity(tile: ProductTile){
    if (tile.quantity>1){
      tile.quantity--
      this.cartService.saveData(tile.name, JSON.stringify(tile))
      this.total = this.countTotal()
    }
  }

  countTotal(){
    let t: number = 0
    let items = this.cartService.getData()
    for(let i of items){
      t += i.price*i.quantity
    }
    return t
  }

ngOnInit(): void {
  this.total = this.countTotal()
  this.searching.text$.subscribe(() => {
    this.items = this.searching.filter(this.cartService.getData());
  })
}

}
