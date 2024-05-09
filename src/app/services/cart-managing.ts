import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public saveData(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public getData() {
    let items: Array<any> = [];
    for (let v of Object.values(localStorage)) {
      items.push(JSON.parse(v));
    }
    return items;
  }

  public getItem(key: string){
    return localStorage.getItem(key)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}