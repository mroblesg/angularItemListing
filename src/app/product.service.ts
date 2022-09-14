import { Injectable } from '@angular/core';
import { ProductItem } from './product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getPokemon() {
    return new ProductItem("assets/img/img1.jpg", "First Product", "First Product description from class");
  }

  public getPokemons() {

    let pokemons: ProductItem[] = [];
    pokemons.push(new ProductItem("assets/img/img1.jpg", "First Product", "First Product description from class"));
    pokemons.push(new ProductItem("assets/img/img2.png", "Second Product", "Second Product description from class"));
    pokemons.push(new ProductItem("assets/img/img3.jpg", "Third Product", "Third Product description from class"));

    return pokemons;
  }

}
