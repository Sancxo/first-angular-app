import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils = [
    {name: 'Machine à laver',
    status: 'éteint-e'},
    {name: 'Frigo',
    status: 'allumé-e'},
    {name: 'Ordinateur',
    status: 'éteint-e'}
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    alert("C'est pas Versailles ici !!!");
  }
  onEteindre() {
    alert("La planète vous remercie !");
  }
}
