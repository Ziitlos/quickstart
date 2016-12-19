import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {NgModule} from '@angular/core';
/**
 * Created by hkfq4 on 19.12.2016.
 */


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'detail/:id',
    component: HeroDetailComponent
  },
  { path: 'heroes',
    component: HeroesComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}



