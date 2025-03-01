import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

const PROD_ID = 'prodId';
const CAT_ID = 'catId';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product: Product = new Product();
  categoryId: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryId = +this.route.snapshot.paramMap.get(CAT_ID)!;
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get(PROD_ID)!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )

    this.productService.getProduct(theProductId);
  }

  addToCart() {

    console.log(`Adding to cart; ${this.product.name}, ${this.product.unitPrice}`);
    this.cartService.addToCart(new CartItem(this.product));
  }
}
