import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {MatSliderModule} from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
  
})
export class CatalogComponent {

  products = [
    {
      id: 1, name: 'Wedding Dress', type: 'Tight', size: 'S' , color:'Beige', material:'Silk',  price:500, 
      image: 'https://cdn.afarose.com/product/W1A100C39S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: 'Accessorise',  type: 'Necklace', size: 'Nan' , color:'Silver',material:'Silver',  price:65, 
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W2004S/J1/1.jpg?20240313',
      showDetails: false
    },
    
    {
      id: 3, name: 'Bridesmaid Dress', type: 'Long', size: 'L' , color:'Beige', material:'Silk',  price:799, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1D100023S/11/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: 'Mom Dress', type: 'Long', size: 'M' , color:'Beige', material:'Tulle',  price:800, 
      image: 'https://cdn.afarose.com/product/B1B100C03S/07/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: 'Wedding Dress', type: 'Long', size: 'M' , color:' Beige', material:'Tulle',  price:700, 
      image: 'https://cdn.afarose.com/product/W1A100C35S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 6, name: 'Plus Size Dress', type: 'Long', size: 'XL' , color:' Beige', material:'Tulle',  price:800, 
      image: 'https://cdn.afarose.com/product/W1A100B88SA/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 7, name: 'Accessorise ', type: ' Necklace', size: 'Nan' , color:' Silver',  material:' RoseGold',  price:50, 
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W2005S/J2/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 8, name: 'Wedding Dress', type: 'Wide', size: 'L' , color:' Beige', material:'Tulle',  price:560, 
      image: 'https://cdn.afarose.com/product/W1A100B97S/A4/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 9, name: 'Mom Dress', type: 'short', size: 'XS' , color:' Blue', material:'Cotton',  price:460, 
      image: 'https://cdn.afarose.com/Lproduct/product/M1B100010S/11/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 10, name: 'Bridesmaid Dress', type: 'Tight', size: 'L' , color:' Pink', material:'Tulle',  price:370, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1A100010S/10/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 11, name: 'Mom Dress', type: 'Wide', size: 'M' , color:' Pink', material:'Tulle',  price:370, 
      image: 'https://cdn.afarose.com/product/M1S100002S/04/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 12, name: 'Plus Size Dress', type: 'Long', size: 'M' , color:' Pink', material:'Tulle',  price:370, 
      image: 'https://cdn.afarose.com/product/B1A100038S/03/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 13, name: 'Accessorise', type: ' Necklace', size: 'Nan' , color:' Silver',material:' Silver',  price:89, 
      image: 'https://cdn.afarose.com/product/A1A1B1001S/J1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 14, name: 'Wedding Dress', type: 'Wide', size: 'XS' , color:' White', material:'Tulle',  price:390, 
      image: 'https://cdn.afarose.com/product/W1A100C12S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 15, name: 'Bridesmaid Dress', type: 'Tight', size: 'M' , color:' Pink', material:'Tulle',  price:770, 
      image: 'https://cdn.afarose.com/product/B1A100048S/52/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 16, name: 'Accessorise', type: 'Necklace', size: 'Nan' , color:'Silver', material:'Silver',  price:89, 
      image: 'https://cdn.afarose.com/Lproduct/product/A1A1W1003S/J1/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 17, name: 'Plus Size Dress', type: 'Long', size: 'XL' , color:' White', material:'Tulle',  price:560, 
      image: 'https://cdn.afarose.com/product/W1A100B29S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 18, name: 'BridesMaid Dress', type: 'Tight', size: 'M' , color:' White', material:'Tulle',  price:490, 
      image: 'https://cdn.afarose.com/Lproduct/product/B1B100034S/38/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 19, name: 'Accessorise',  type: 'Necklace', size: 'Nan' , color:'Silver', material:'Silver',  price:79, 
      image: 'https://cdn.afarose.com/product/A1A1W3005S/J1/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 20, name: 'Mom Dress', type: 'Long', size: 'S' , color:'Green', material:'Cotton',  price:870, 
      image: 'https://cdn.afarose.com/Lproduct/product/M1S100008S/03/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 21, name: 'Plus Size Dress', type: 'Short', size: 'XXL' , color:'Beige', material:'Tulle',  price:890, 
      image: 'https://cdn.afarose.com/Lproduct/product/W1A100B86S/A3/4.jpg?20240711',
      showDetails: false
    }
  ];
filteredItems: any;
selectedType: any;
selectedSize: any;
selectedColor: any;
selectedMaterial: any;
selectedReview: any;

constructor(private cartService: CartService, private snackBar: MatSnackBar) {}


types = [...new Set(this.products.map(product => product.type))]; 
sizes = [...new Set(this.products.map(product => product.size))]; 
colors = [...new Set(this.products.map(product => product.color))]; 
materials = [...new Set(this.products.map(product => product.material))];

toggleDetails(product: any, show: boolean): void {
  product.showDetails = show;
}

addToCart(product: any) {
  this.cartService.addToCart(product);
  this.snackBar.open('Product added to cart', 'Close', {
    duration: 600,
  });
}

clearSearch() {
  this.searchQuery = '';
  this.filteredProducts = this.products;
}

searchQuery: string = '';
minPrice: number = 0;
maxPrice: number = 1000;
filteredProducts: any[] = this.products;

onSearch(): void {
  if (this.searchQuery.trim() !== '') {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } else {
    this.filteredProducts = this.products; 
  }
}


filterProducts() {
  this.filteredProducts = this.products.filter(product => {
    const matchesSearchQuery = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    const matchesPriceRange = product.price >= this.minPrice && product.price <= this.maxPrice;
    const matchesType = this.selectedType ? product.type === this.selectedType : true;
    const matchesSize = this.selectedSize ? product.size === this.selectedSize : true;
    const matchesColor = this.selectedColor ? product.color === this.selectedColor : true;
    const matchesMaterial = this.selectedMaterial ? product.material === this.selectedMaterial : true;
    return matchesSearchQuery && matchesPriceRange && matchesType && matchesSize && matchesColor && matchesMaterial ;
  });
}

clearFilters() {
  this.searchQuery = '';
  this.minPrice = 0;
  this.maxPrice = 1000;
  this.selectedType = '';
  this.selectedSize = '';
  this.selectedColor = '';
  this.selectedMaterial = '';
  this.filterProducts();
}


  
}
