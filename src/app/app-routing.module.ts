import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {EtudeComponent }  from './etude/etude.component';
import {CompetenceComponent }  from './competence/competence.component';
const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'etude',
    component: EtudeComponent
  },
  {
    path: 'competence',
    component: CompetenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
