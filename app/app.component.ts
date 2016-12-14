import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <hr>
    <h2>Aus dem Object<br>
    My favorite hero is: {{myHeero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heeroes">
        {{hero.id}} {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heeroes.length > 3">There are many heeroes!</p>
`
})
export class AppComponent {
  title: string;
  myHero: string;
  heroes: any;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.myHero = this.heroes[1];
  }

  // Object aus dem hero.ts
  heeroes = [
    new Hero(1, 'WWindstorm'),
    new Hero(13, 'BBombasto'),
    new Hero(15, 'MMagneta'),
    new Hero(20, 'TTornado')
  ]

  myHeero = this.heeroes[0];
}
