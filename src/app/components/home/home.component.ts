import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/Tiles';
import { LoadData } from '../../services/data-loader';
import { Searching } from '../../services/searching';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = []

  constructor(private loadData: LoadData, private searching: Searching) {    
      
  }

  ngOnInit(): void {
    this.searching.text$.subscribe(() => {
      this.loadData.getData().subscribe((data: any) => {this.tiles = this.searching.filter(data['home'])})
    })
  }

}
