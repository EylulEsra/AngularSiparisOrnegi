import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-ornek',
  templateUrl: './ng-style-ornek.component.html',
  styleUrls: ['./ng-style-ornek.component.css']
})
export class NgStyleOrnekComponent {
  renkler: string[] = ["red", "green", "blue"];
  seciliRenk : string;
  indis:number =0;

  constructor() {this.seciliRenk = this.renkler[this.indis];
  }

  renkDegistir() {
    ++this.indis;
    if(this.indis == this.renkler.length){
      this.indis =0;
    }
    this.seciliRenk = this.renkler[this.indis];
  }
  

}
