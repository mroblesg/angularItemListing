import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    CarouselComponent,
    ProductItemComponent,
    StarsComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
