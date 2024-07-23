import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css'
})

export class BestsellersComponent {
  products = [
    {
      id: 1, name: ' Best seller', type: 'Long', size: 'S' , color:' Pink', material:' Silk',  price:520,
      image: 'https://cdn.afarose.com/Lproduct/product/BSA100006S/S007/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: ' Best seller', type: 'Tight', size: 'M' , color:' Purple', material:' Cotton',  price:270,
      image: 'https://cdn.afarose.com/product/F1A100012S/S011/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 3, name: ' Best seller', type: 'Wide', size: 'S' , color:' Pink', material:' Tulle',  price:140, 
      image: 'https://cdn.afarose.com/product/BSA100013S/S007/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: ' Best seller', type: 'Short', size: 'L' , color:' Black', material:' Silk',  price:200,
      image: 'https://cdn.afarose.com/product/BSA100005S/S027/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: ' Best seller', type: 'Wide', size: 'S' , color:' White', material:' Tulle',  price:190,
      image: 'https://cdn.afarose.com/product/BSA100001S/S004/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 6, name: ' Best seller', type: 'Short', size: 'S' , color:' Pink', material:' Cotton',  price:210,
      image: 'https://cdn.afarose.com/product/F1A100006S/10/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 7, name: ' Best seller', type: 'Long', size: 'S' , color:' Pink', material:' Cotton',  price:270,
      image: 'https://cdn.afarose.com/product/F1A100003S/52/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 8, name: ' Best seller', type: 'Wide', size: 'M' , color:' Pink', material:' Silk',  price:150,
      image: 'https://cdn.afarose.com/product/F1A100009S/S007/2.jpg?20240313',
      showDetails: false
    },
    { 
      id: 9, name: ' Best seller', type: 'Long', size: 'L' , color:' Black', material:' Cotton',  price:210,
      image: 'https://cdn.afarose.com/product/F1A100005S/46/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 10, name: ' Best seller', type: 'Long', size: 'S' , color:' Purple', material:' Cotton',  price:300,
      image: 'https://cdn.afarose.com/product/BSA100010S/S011/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 11, name: ' Best seller', type: 'Short', size: 'M' , color:' Blue', material:' Tulle',  price:400,
      image: 'https://cdn.afarose.com/product/BSA100007S/S013/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 12, name: ' Best seller', type: 'Tight', size: 'L' , color:' Pink', material:' Cotton',  price:100,
      image: 'https://cdn.afarose.com/product/F1A100004S/15/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 13, name: ' Best seller', type: 'Short', size: 'S' , color:' Pink', material:' Tulle',  price:400,
      image: 'https://cdn.afarose.com/product/BSA100002S/S007/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 14, name: ' Best seller', type: 'Short', size: 'S' , color:' Blue', material:' Silk',  price:90,
      image: 'https://cdn.afarose.com/product/F1A100001S/25/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 15, name: ' Best seller', type: 'Short', size: 'M' , color:' Pink', material:' Cotton',  price:270,
      image: 'https://cdn.afarose.com/product/BSA100009S/S004/2.jpg?20240313',
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
