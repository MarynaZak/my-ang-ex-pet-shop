import { Component, OnInit } from '@angular/core';
import { ProductTile } from '../../models/ProductTiles';
import { LoadData } from '../../services/data-loader';
import { CartService } from '../../services/cart-managing';
import { Searching } from '../../services/searching';

@Component({
  selector: 'app-cat-bowls',
  templateUrl: './cat-bowls.component.html',
  styleUrl: './cat-bowls.component.css'
})
export class CatBowlsComponent implements OnInit {

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
      this.loadData.getData().subscribe((data: any) => {this.tiles = this.searching.filter(data['cat bowls'])})
    })
  }

}

