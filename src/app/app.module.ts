import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainNavComponent, TopNavComponent, HeroComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
