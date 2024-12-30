import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentalComponent } from './environmental/environmental.component';
import { SocialComponent } from './social/social.component';
import { CulturalComponent } from './cultural/cultural.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { EnvironmentalSurTerreComponent } from './environmental-sur-terre/environmental-sur-terre.component';
import { EnvironmentalEnAirComponent } from './environmental-en-air/environmental-en-air.component';

const routes: Routes = [
  { path: 'environmental', component: EnvironmentalComponent },
  { path: 'environmentalSurTerre', component: EnvironmentalSurTerreComponent },
  { path: 'environmentalEnAir', component: EnvironmentalEnAirComponent },
  { path: 'page2', component: Page2Component },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
