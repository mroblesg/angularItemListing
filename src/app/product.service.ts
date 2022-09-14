import { Injectable } from '@angular/core';
import { ProductItem } from './product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getPokemon() {
    let pokemon = new ProductItem("assets/img/img1.jpg", "First Product", "First Product description from class", 1);
    console.log(pokemon);
    return pokemon;
    
  }

  public getPokemons() {

    let pokemons: ProductItem[] = [];
    pokemons.push(new ProductItem("assets/img/img1.jpg", "First Product", "First Product description from class", 1));
    pokemons.push(new ProductItem("assets/img/img2.png", "Second Product", "Second Product description from class", 2));
    pokemons.push(new ProductItem("assets/img/img3.jpg", "Third Product", "Third Product description from class", 3));

    return pokemons;
  }

}
