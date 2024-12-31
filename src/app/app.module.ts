import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentalComponent } from './environmental/environmental.component';
import { SocialComponent } from './social/social.component';
import { CulturalComponent } from './cultural/cultural.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { EnvironmentalSurTerreComponent } from './environmental-sur-terre/environmental-sur-terre.component';
import { EnvironmentalEnAirComponent } from './environmental-en-air/environmental-en-air.component';
import { EnvironmentalEnAirArComponent } from './environmental-en-air/environmental-en-air-ar/environmental-en-air-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentalComponent,
    SocialComponent,
    CulturalComponent,
    NavComponent,
    NavBarComponent,
    HomeComponent,
    Page2Component,
    EnvironmentalSurTerreComponent,
    EnvironmentalEnAirComponent,
    EnvironmentalEnAirArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
