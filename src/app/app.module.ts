import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrathBodyComponent } from './wrath-body/wrath-body.component';
import { WrathNavBarComponent } from './wrath-nav-bar/wrath-nav-bar.component';
import { WrathNavPlaceComponent } from './wrath-nav-place/wrath-nav-place.component';
import { KnightsPageComponent } from './knights-page/knights-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrathBodyComponent,
    WrathNavBarComponent,
    WrathNavPlaceComponent,
    KnightsPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
