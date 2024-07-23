import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-plussize',
  templateUrl: './plussize.component.html',
  styleUrl: './plussize.component.css'
})

export class PlussizeComponent {
  products = [
    {
      id: 1, name: ' PlusSize Dress', type: 'Tight', size: 'XL' , color:' Beige', material:' Silk',  price:500, 
      image: 'https://cdn.afarose.com/product/W1A100B29S/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 2, name: ' PlusSize Dress', type: 'Long', size: 'L' , color:' Beige', material:' Silk',  price:450, 
      image: 'https://cdn.afarose.com/Lproduct/product/W1A100B34S/A2/1.jpg?20240313',
      showDetails: false
    },
    {
      id: 3, name: ' PlusSize Dress', type: 'Wide', size: 'XXL' , color:' Beige', material:' Tulle',  price:720, 
      image: 'https://cdn.afarose.com/product/W1A100B88SA/A3/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 4, name: ' PlusSize Dress', type: 'Long', size: 'XL' , color:' Beige', material:' Silk',  price:640, 
      image: 'https://cdn.afarose.com/product/W1A100B18S/A2/2.jpg?20240313',
      showDetails: false
    },
    {
      id: 5, name: ' PlusSize Dress', type: 'Wide', size: 'L' , color:' Beige', material:' Tulle',  price:520, 
      image: 'https://cdn.afarose.com/Lproduct/product/W1A100B86S/A3/4.jpg?20240711',
      showDetails: false
    },
    {
      id: 6, name: ' PlusSize Dress', type: 'Tight', size: 'L' , color:' Beige', material:' Silk',  price:430, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/on/demandware.static/-/Sites-oss-Library/default/dwb67596da/zq-images/bridal/Bridal_LP_2.jpg?yocs=1_5_',
      showDetails: false
    },
    {
      id: 7, name: ' PlusSize Dress', type: 'Long', size: 'XXL' , color:' Beige', material:' Tulle',  price:500, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/on/demandware.static/-/Sites-oss-Library/default/dw52ebceb8/zq-images/bridal/Bridal-LP_5-New.jpg?yocs=1_5_',
      showDetails: false
    },
    {
      id: 8, name: ' PlusSize Dress', type: 'Tight', size: 'XL' , color:' Beige', material:' Silk',  price:670, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dw8f87f25a/images/hi-res/2719_09058_mc_0079.jpg?sw=653&sh=940&sm=fit&q=90&strip=false&yocs=1_5_',
      showDetails: false
    },
    {
      id: 9, name: ' PlusSize Dress', type: 'Long', size: 'XXL' , color:' Beige', material:' Silk',  price:300, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dwb6f7ab86/images/hi-res/2719_09051_mc_0077.jpg?sw=653&sh=940&sm=fit&q=90&strip=false&yocs=1_5_',
      showDetails: false
    },
    {
      id: 10, name: ' PlusSize Dress', type: 'Short', size: 'L' , color:' Beige', material:' Tulle',  price:630, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dw836eed58/images/hi-res/2719_10091_mc_0106.jpg?sw=653&sh=940&sm=fit&q=90&strip=false&yocs=1_5_',
      showDetails: false
    },
    {
      id: 11, name: ' PlusSize Dress', type: 'Tight', size: 'L' , color:' Beige', material:' Silk',  price:520, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dwfc5e541c/images/on-hover/2719_15810_ma_0149_0001_00.jpg?sw=360&sh=519&sm=fit&q=90&strip=false&yocs=1_',
      showDetails: false
    },
    {
      id: 12, name: ' PlusSize Dress', type: 'Tight', size: 'L' , color:' Beige', material:' Silk',  price:440, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dw08933406/images/on-hover/2719_15985_ma_0001.jpg?sw=360&sh=519&sm=fit&q=90&strip=false&yocs=1_',
      showDetails: false
    },
    {
      id: 13, name: ' PlusSize Dress', type: 'Tight', size: 'XXL' , color:' Beige', material:' Silk',  price:500, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dw5831cf83/images/on-hover/2719_15845_ma_0001.jpg?sw=360&sh=519&sm=fit&q=90&strip=false&yocs=1_',
      showDetails: false
    },
    {
      id: 14, name: ' PlusSize Dress', type: 'Tight', size: 'L' , color:' Beige', material:' Tulle',  price:670, 
      image: 'https://cdn-fsly.yottaa.net/647e39fcd931406b6711ee66/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dw265f6e48/images/on-hover/2719_15974_ma_0001.jpg?sw=360&sh=519&sm=fit&q=90&strip=false&yocs=1_',
      showDetails: false
    },
    {
      id: 15, name: ' PlusSize Dress', type: 'Short', size: 'XL' , color:' Beige', material:' Silk',  price:320, 
      image: 'https://cdn-fsly.yottaa.net/647e39fed931406b6711f05b/www.eloquii.com/v~4b.174/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Eloquii/default/dw40c0ff50/images/on-hover/2719_15935_ma_0001.jpg?sw=360&sh=519&sm=fit&q=90&strip=false&yocs=1_',
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
