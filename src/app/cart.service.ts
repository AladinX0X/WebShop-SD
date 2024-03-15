import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];
  totalPrice = 0;

  constructor() {}

  addToCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = { ...product, quantity: 1 };
      this.items.push(newItem);
    }
    this.updateTotalPrice();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  public getItems() {
    return this.items;
  }

  getItemAtIndex(index: number) {
    return this.items[index];
  }

  updateItemAtIndex(index: number, item: any) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = item;
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  private updateTotalPrice() {
    this.totalPrice = this.getTotalPrice();
  }
  
  public getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
}
