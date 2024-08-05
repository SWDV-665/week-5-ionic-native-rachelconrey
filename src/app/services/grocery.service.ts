import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  items: any[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  removeItem(index: number) {
    if (this.items) 
      this.items.splice(index, 1);
    }
  
  addItem(item: any) {
    this.items.push(item);
  } 

  editItem(item: any, index: number) {
    this.items[index] = item as typeof this.items[number];
  }
}