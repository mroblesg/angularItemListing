import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductItem } from '../product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() pokemon: ProductItem;

  constructor(productService: ProductService, private route: ActivatedRoute) {
    
    // let id: Observable<string> = route.params.pipe(map(p => p.id));
    this.pokemon = productService.getPokemon();

  }

  ngOnInit(): void { }

}
