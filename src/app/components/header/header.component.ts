import { Component, OnInit } from '@angular/core';
import { Searching } from '../../services/searching';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private searching: Searching) {    
      
  }

  hidden = true;

  changeText(text: string) {
    this.searching.inputText(text)
  }

  toggle(){    
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
  }

}
