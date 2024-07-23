import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  getItems(): never[] {
    throw new Error('Method not implemented.');
  }

  private cartItems: any[] = []; 

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

 
  
}
