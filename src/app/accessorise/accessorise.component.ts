import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-accessorise',
  templateUrl: './accessorise.component.html',
  styleUrl: './accessorise.component.css'
})

export class AccessoriseComponent {
  products = [
    {
      id: 1, name: ' Accessory', type: 'Hairclip', size: 'Nan' , color:' Silver', material:' Silver',  price:50,
      image: 'https://cdn.afarose.com/product/A1A1W3005S/J1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: ' Accessory', type: 'Hairclip', size: 'Nan' , color:' Rose gold', material:' Rose gold',  price:90,
      image: 'https://cdn.afarose.com/product/A1A1W3006S/J2/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 3, name: ' Accessory', type: 'Hairclip', size: 'Nan' , color:' Gold', material:' Gold',  price:95,
      image: 'https://cdn.afarose.com/product/A1A1W3004S/J2/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: ' Accessory', type: 'Hairclip', size: 'Nan' , color:' Silver', material:' Silver',  price:80,
      image: 'https://cdn.afarose.com/product/A1A1W3002S/J1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: ' Accessory', type: 'Necklace', size: 'Nan' , color:' Silver', material:' Silver',  price:200,
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W2006S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 6, name: ' Accessory', type: 'Necklace', size: 'Nan' , color:' Gold', material:' Gold',  price:290,
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W2005S/J2/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 7, name: ' Accessory', type: 'Necklace', size: 'Nan' , color:' Silver', material:' Silver',  price:270,
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W2004S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 8, name: ' Accessory', type: 'Necklace', size: 'Nan' , color:' Silver', material:' Silver',  price:200,
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W2001S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 9, name: ' Accessory', type: 'Jewelry', size: 'Nan' , color:' Silver', material:' Silver',  price:190,
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1B1003S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 10, name: ' Accessory', type: 'Jewelry', size: 'Nan' , color:' Silver', material:' Silver',  price:140,
      image: 'https://cdn.afarose.com/product/A1A1B1001S/J1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 11, name: ' Accessory', type: 'Crown', size: 'Nan' , color:' Silver', material:' Silver',  price:160,
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W1001S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 12, name: ' Accessory', type: 'Crown', size: 'Nan' , color:' Silver', material:' Silver',  price:100, 
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W1003S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 13, name: ' Accessory', type: 'Veil', size: 'Nan' , color:' White', material:' Tulle',  price:200, 
      image: 'https://cdn.afarose.com/product/W1A100A22S/A1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 14, name: ' Accessory', type: 'Veil', size: 'Nan' , color:' White', material:' Tulle',  price:220, 
      image: 'https://cdn.afarose.com/product/W1A100A21S/A1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 15, name: ' Accessory', type: 'Veil', size: 'Nan' , color:' White', material:' Tulle',  price:140,
      image: 'https://cdn.afarose.com/product/W1A100A03S/A1/2.jpg?20240313',
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
