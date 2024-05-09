import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Searching {

  constructor() {}

  private searchText = new BehaviorSubject('');

  text$ = this.searchText.asObservable();

  inputText(text: string) {
    this.searchText.next(text);
  }

  filter(items: any[]) {    
    let newItems: Array<any> = [];
    if(!items){newItems = []}
    else if(!this.searchText.value){newItems = items}
    else for (let i of items) {
      if(i.name.toLowerCase().startsWith(this.searchText.value.toLowerCase())){
        newItems.push(i)
      }
    }
    return newItems;
  }
}