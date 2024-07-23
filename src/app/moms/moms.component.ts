import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-moms',
  templateUrl: './moms.component.html',
  styleUrl: './moms.component.css'
})
export class MomsComponent {
  products = [
    {
      id: 1, name: ' Mom Dress', type: 'Tight', size: 'S' , color:' Green', material:' Silk',  price:500, 
      image: 'https://cdn.afarose.com/product/B1B100C03S/07/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: ' Mom Dress', type: 'Tight', size: 'M' , color:' Blue', material:' Cotton',  price:200, 
      image: 'https://cdn.afarose.com/product/B1D100C03S/59/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 3, name: ' Mom Dress', type: 'Wide', size: 'L' , color:' Blue', material:' Cotton',  price:100, 
      image: 'https://cdn.afarose.com/product/B1A100038S/03/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: ' Mom Dress', type: 'Tight', size: 'S' , color:' Green', material:' Cotton',  price:220, 
      image: 'https://cdn.afarose.com/product/B1D100C01S/31/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: ' Mom Dress', type: 'Tight', size: 'S' , color:' Pink', material:' Tulle',  price:320, 
      image: 'https://cdn.afarose.com/product/M1D100012S/12/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 6, name: ' Mom Dress', type: 'Long', size: 'S' , color:' Pink', material:' Silk',  price:105, 
      image: 'https://cdn.afarose.com/product/M1S100012S/09/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 7, name: ' Mom Dress', type: 'Tight', size: 'S' , color:' Pink', material:' Cotton',  price:220, 
      image: 'https://cdn.afarose.com/Lproduct/product/M1B100003S/04/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 8, name: ' Mom Dress', type: 'Long', size: 'S' , color:' Pink', material:' Tulle',  price:150, 
      image: 'https://cdn.afarose.com/Lproduct/product/M1B100011S/04/3.jpg?20240313',
      showDetails: false
    },
    {
      id: 9, name: ' Mom Dress', type: 'Tight', size: 'M' , color:' Blue', material:' Silk',  price:220, 
      image: 'https://cdn.afarose.com/product/B1D100023S/11/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 10, name: ' Mom Dress', type: 'Long', size: 'L' , color:' Blue', material:' Cotton',  price:320, 
      image: 'https://cdn.afarose.com/product/B1A100029S/03/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 9, name: ' Mom Dress', type: 'Tight', size: 'S' , color:' Pink', material:' Silk',  price:220, 
      image: 'https://cdn.afarose.com/product/B1D100043S/04/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 12, name: ' Mom Dress', type: 'Wide', size: 'M' , color:' Blue', material:' Silk',  price:220,
      image: 'https://cdn.afarose.com/product/B1A100028S/03/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 13, name: ' Mom Dress', type: 'Short', size: 'S' , color:' Blue', material:' Cotton',  price:90, 
      image: 'https://cdn.afarose.com/Lproduct/product/M1B100010S/11/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 14, name: ' Mom Dress', type: 'Long', size: 'M' , color:' Pink', material:' Silk',  price:220, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1D100045S/12/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 15, name: ' Mom Dress', type: 'Tight', size: 'L' , color:' White', material:' Silk',  price:190, 
      image: 'https://cdn.afarose.com/product/B1B100040S/01/2.jpg?20240313',
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
