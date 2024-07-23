import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems: any[] = [];
  isLoggedIn: boolean;

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) {
    this.cartItems = this.cartService.getCartItems();
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  getTotalPrice() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  checkout() {
    if (this.isLoggedIn) {
      this.router.navigate(['/payment']);
    } else {
      alert('You must be logged in to proceed to checkout.');
    }
  }
}
