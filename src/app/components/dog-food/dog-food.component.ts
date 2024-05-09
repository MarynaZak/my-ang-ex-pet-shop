import { Component, OnInit } from '@angular/core';
import { ProductTile } from '../../models/ProductTiles';
import { LoadData } from '../../services/data-loader';
import { CartService } from '../../services/cart-managing';
import { Searching } from '../../services/searching';

@Component({
  selector: 'app-dog-food',
  templateUrl: './dog-food.component.html',
  styleUrl: './dog-food.component.css'
})
export class DogFoodComponent implements OnInit {

  tiles: ProductTile[] = []

  constructor(private loadData: LoadData, private cartService: CartService, private searching: Searching) {    
      
  }

  addToCart(tile: ProductTile) {
    let t: any = this.cartService.getItem(tile.name)
    if(t){
      t = JSON.parse(t)
      t.quantity++
    }
    else{
      t = tile
      t.quantity = 1
    }
    this.cartService.saveData(t.name, JSON.stringify(t))
  }

  ngOnInit(): void {
    this.searching.text$.subscribe(() => {
      this.loadData.getData().subscribe((data: any) => {this.tiles = this.searching.filter(data['dog food'])})
    })
  }

}

