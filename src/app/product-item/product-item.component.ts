import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  pokemon: ProductItem
  @Input() imgSrc = "";
  @Input() title = "";
  @Input() description = "";

  constructor(productService: ProductService) {
    this.pokemon = productService.getPokemon();
  }

  ngOnInit(): void {
  }

}
