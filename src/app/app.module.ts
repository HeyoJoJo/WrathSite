import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrathNavBarComponent } from './wrath-nav-bar/wrath-nav-bar.component';
import { KnightsPageComponent } from './knights-page/knights-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WrathFooterComponent } from './wrath-footer/wrath-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrathNavBarComponent,
    KnightsPageComponent,
    HomePageComponent,
    PhotosPageComponent,
    CalendarPageComponent,
    ContactPageComponent,
    WrathFooterComponent,
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
