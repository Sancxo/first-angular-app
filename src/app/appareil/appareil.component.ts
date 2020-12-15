import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = "";
  @Input() appareilStatus: string = "";
  @Input() index: number = 0;


  constructor(private appareilService : AppareilService) {  }

  ngOnInit(): void {
  }

  // getStatus(): string  {
  //   return this.appareilStatus;
  // }

  onSwitch() {
    if(this.appareilStatus === 'allumé-e') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint-e') {
      this.appareilService.switchOnOne(this.index);
    };
  };

}
