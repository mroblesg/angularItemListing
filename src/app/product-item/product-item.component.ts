import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() pokemon: ProductItem;

  constructor(productService: ProductService) {
    this.pokemon = productService.getPokemon();
  }

  ngOnInit(): void {
  }

}
