import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-ornek',
  templateUrl: './ng-class-ornek.component.html',
  styleUrls: ['./ng-class-ornek.component.css']
})
export class NgClassOrnekComponent {

  zeminler: string[] = ["sari", "kirmizi", "mavi"];
  yazilar: string[] = ["siyah", "kirmizi", "beyaz"];


  zemin : string;
  yazi : string
  indis:number =0;

  constructor() {
    this.zemin = this.zeminler[this.indis];
    this.yazi = this.yazilar[this.indis];
  }

  

}
