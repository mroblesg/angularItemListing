import { Component } from '@angular/core';
import { ProductItem } from './product-item';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  pokemons: ProductItem[];

  constructor(private productService: ProductService) {
    this.title = 'productsListing';
    this.pokemons = this.productService.getPokemons();
  }
  

}
