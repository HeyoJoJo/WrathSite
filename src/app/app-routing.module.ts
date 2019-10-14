import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnightsPageComponent } from './knights-page/knights-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'The Knights', component: KnightsPageComponent },
  { path: 'Photos', component: KnightsPageComponent },
  { path: 'Calendar', component: KnightsPageComponent },
  { path: 'Contact Us!', component: KnightsPageComponent },
  { path: '', redirectTo: "/Home", pathMatch: 'full'},
  { path: '**', redirectTo: "/Home", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
