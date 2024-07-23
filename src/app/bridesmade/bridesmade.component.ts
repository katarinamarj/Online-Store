import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bridesmade',
  templateUrl: './bridesmade.component.html',
  styleUrl: './bridesmade.component.css'
})

export class BridesmadeComponent {
  products = [
    {
      id: 1, name: ' Bridesmaid dress', type: 'Wide', size: 'S' , color:' Blue', material:' Silk',  price:500, 
      image: 'https://cdn.afarose.com/product/B1D100020S/25/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: ' Bridesmaid dress', type: 'Long', size: 'M' , color:' Blue', material:' Cotton',  price:250, 
      image: 'https://cdn.afarose.com/product/B1A100015S/59/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 3, name: ' Bridesmaid dress', type: 'Long', size: 'S' , color:' Blue', material:' Silk',  price:100, 
      image: 'https://cdn.afarose.com/product/B1A100030S/11/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: ' Bridesmaid dress', type: 'Wide', size: 'L' , color:' Green', material:' Cotton',  price:350, 
      image: 'https://cdn.afarose.com/product/B1A100047S/60/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: ' Bridesmaid dress', type: 'Long', size: 'S' , color:' Pink', material:' Tulle',  price:420, 
      image: 'https://cdn.afarose.com/product/B1A100039S/16/2.jpg?20240313 ',
      showDetails: false
    },
    {
      id: 6, name: ' Bridesmaid dress', type: 'Wide', size: 'M' , color:' Pink', material:' Silk',  price:520, 
      image: 'https://cdn.afarose.com/product/B1A100050S/04/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 7, name: ' Bridesmaid dress', type: 'Wide', size: 'M' , color:' Pink', material:' Tulle',  price:320, 
      image: 'https://cdn.afarose.com/product/B1A100041S/10/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 8, name: ' Bridesmaid dress', type: 'Long', size: 'L' , color:' Pink', material:' Cotton',  price:190, 
      image: 'https://cdn.afarose.com/product/B1A100051S/10/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 9, name: ' Bridesmaid dress', type: 'Wide', size: 'M' , color:' Purple', material:' Silk',  price:320, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1S100014S/39/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 10, name: ' Bridesmaid dress', type: 'Wide', size: 'L' , color:' Pink', material:' Silk',  price:250, 
      image: 'https://cdn.afarose.com/product/B1A100048S/52/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 11, name: ' Bridesmaid dress', type: 'Wide', size: 'M' , color:' Brown', material:' Tulle',  price:300, 
      image: 'https://cdn.afarose.com/product/B1A100017S/53/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 12, name: ' Bridesmaid dress', type: 'Long', size: 'S' , color:' Pink', material:' Tulle',  price:200, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1A100012S/12/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 13, name: ' Bridesmaid dress', type: 'Wide', size: 'M' , color:' Green', material:' Silk',  price:120, 
      image: 'https://cdn.afarose.com/product/B1B100C03S/07/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 14, name: ' Bridesmaid dress', type: 'Long', size: 'L' , color:' Blue', material:' Cotton',  price:145, 
      image: 'https://cdn.afarose.com/product/B1D100C03S/59/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 15,name: ' Bridesmaid dress', type: 'Wide', size: 'S' , color:' Green', material:' Tulle',  price:190, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1D100039S/07/1.jpg?20240313',
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
