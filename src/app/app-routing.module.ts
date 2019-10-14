import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnightsPageComponent } from './knights-page/knights-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const appRoutes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'The Knights', component: KnightsPageComponent },
  { path: 'Photos', component: PhotosPageComponent },
  { path: 'Calendar', component: CalendarPageComponent},
  { path: 'Contact Us!', component: ContactPageComponent },
  { path: '', redirectTo: "/Home", pathMatch: 'full'},
  { path: '**', redirectTo: "/Home", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
