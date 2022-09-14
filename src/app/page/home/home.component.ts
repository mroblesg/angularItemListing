import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/product-item';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: ProductItem[];

  constructor(private productService: ProductService) {
    this.pokemons = this.productService.getPokemons();
  }

  ngOnInit(): void {
  }

}
