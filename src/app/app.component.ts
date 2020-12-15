import { Component, OnInit } from '@angular/core';
// import { rejects } from 'assert';
// import { resolve } from 'dns';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Date();
  // lastUpdate = new Promise((resolve, reject) => {
  //   const date = new Date();
  //   setTimeout(() => {
  //     resolve(date);
  //   }, 2000);
  // });

  appareils: any = [];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    if(confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ? C'est pas Versailles ici !!!")) {
      this.appareilService.switchOnAll();
    }
  }
  onEteindre() {
    if (confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ? La planète vous remerciera !")) {
      this.appareilService.switchOffAll();
    }
  }
}
