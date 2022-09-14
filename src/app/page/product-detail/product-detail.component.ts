import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/product-item';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pokemon: ProductItem;

  constructor(private productService: ProductService) {
    this.pokemon = this.productService.getPokemon();
  }

  ngOnInit(): void {
  }

}
