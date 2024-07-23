import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-brides',
  templateUrl: './brides.component.html',
  styleUrls: ['./brides.component.css']
})

export class BridesComponent {
  products = [
    {
      id: 1, name: ' Wedding Dress', type: 'Tight', size: 'S' , color:' Beige', material:' Silk',  price:500,
      image: 'https://cdn.afarose.com/product/W1A100C39S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: ' Wedding Dress', type: 'Long', size: 'M' , color:' Beige', material:'Tulle',  price:800,
      image: 'https://cdn.afarose.com/product/W1A100C24S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 3, name: ' Wedding Dress', type: ' Long', size: 'L' , color:' Beige', material:' Silk',  price:799,
      image: 'https://cdn.afarose.com/Lproduct/product/W1A100B46S/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: ' Wedding Dress', type: 'Long', size: 'M' , color:' Beige', material:' Tulle',  price:700,
      image: 'https://cdn.afarose.com/Lproduct/product/W1A100C27S/A4/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: 'Wedding Dress', type: 'Wide', size: 'S' , color:' Beige', material:' Tulle',  price:650,
      image: 'https://cdn.afarose.com/product/W1A100C35S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 6, name: 'Wedding Dress', type: 'Long', size: 'M' , color:' Beige', material:' Silk',  price:400,
      image: 'https://cdn.afarose.com/product/W1A100C36S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 7, name: 'Wedding Dress', type: 'Tight', size: 'S' , color:' Beige', material:' Tulle',  price:900, 
      image: 'https://cdn.afarose.com/product/W1A100C33S/A1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 8, name: 'Wedding Dress', type: 'Short', size: 'L' , color:' Beige', material:' Tulle',  price:650, 
      image: 'https://cdn.afarose.com/product/W1A100B97S/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 9, name: 'Wedding Dress', type: 'Wide', size: 'S' , color:' Beige', material:' Silk',  price:550, 
      image: 'https://cdn.afarose.com/product/W1A100C01S/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 10, name: 'Wedding Dress', type: 'Short', size: 'M' , color:' Beige', material:' Tulle',  price:720, 
      image: 'https://cdn.afarose.com/product/W1A100B95S/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 11, name: 'Wedding Dress', type: 'Wide', size: 'S' , color:' Beige', material:' Tulle',  price:690, 
      image: 'https://cdn.afarose.com/product/W1A100C04SB/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 12, name: 'Wedding Dress', type: 'Tight', size: 'S' , color:' Beige', material:' Silk',  price:780, 
      image: 'https://cdn.afarose.com/product/W1A100C01SA/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 13, name: 'Wedding Dress', type: 'Wide', size: 'L' , color:' Beige', material:' Tulle',  price:350, 
      image: 'https://cdn.afarose.com/product/W1A100B96S/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 14, name: 'Wedding Dress',type: 'Wide', size: 'S' , color:' Beige', material:' Cotton',  price:800, 
      image: 'https://cdn.afarose.com/product/W1A100C12S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 15, name: 'Wedding Dress', type: 'Short', size: 'M' , color:' Beige', material:' Tulle',  price:550, 
      image: 'https://cdn.afarose.com/product/W1A100B10S/A1/2.jpg?20240313',
      showDetails: false
    }
    
  ];

  constructor(private cartService: CartService, private snackBar: MatSnackBar) {}

  toggleDetails(product: any, show: boolean): void {
    product.showDetails = show;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.snackBar.open('Product added to cart', 'Close', {
      duration: 600,
    });
  }
}