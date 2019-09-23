import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'lomm', pathMatch: 'full' },
  { path: 'information-to-insight', component: LandingPageComponent },
  { path: 'lomm', loadChildren: './lomm/lomm.module#LommModule' },
  { path: 'hsc', loadChildren: './hsc/hsc.module#HscModule' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
