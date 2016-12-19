/**
 * Created by hkfq4 on 19.12.2016.
 */

import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}


