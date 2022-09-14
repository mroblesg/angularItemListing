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

}
