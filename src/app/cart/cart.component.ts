import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(
    private cartService: CartService,
    private router: Router){ }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
  }

  getTotalPrice(): number {
    return this.items.reduce((total, current) => {
      const price = parseFloat(current.price.replace(/[^0-9.-]+/g, ""));
      return total + (price * current.quantity);
    }, 0);
  }
  

  formatCurrency(value: number): string {
    return `$${value.toFixed(2)}`;
  }

  incrementQuantity(index: number): void {
    const item = this.cartService.getItemAtIndex(index);
    if (item) {
      item.quantity++;
      this.cartService.updateItemAtIndex(index, item); 
    }
  }
  
  decrementQuantity(index: number): void {
    const item = this.cartService.getItemAtIndex(index);
    if (item && item.quantity > 1) { 
      item.quantity--;
      this.cartService.updateItemAtIndex(index, item);
    }
  }
  
  goToHomePage() {
    this.router.navigate(['/']);
  }

}

