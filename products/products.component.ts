import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }


  clickProduct(id: string) {
    const productClicked = this.productService.getProduct(id);
    console.log({ productClicked });
  }

}
