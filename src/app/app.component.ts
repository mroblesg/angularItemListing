import { Component } from '@angular/core';
import { ProductItem } from './product-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productsListing';
  item1: ProductItem = new ProductItem("assets/img/img1.jpg", "First Product", "First Product description from class");
  item2: ProductItem = new ProductItem("assets/img/img2.png", "Second Product", "Second Product description from class");
  item3: ProductItem = new ProductItem("assets/img/img3.jpg", "Third Product", "Third Product description from class");
}
