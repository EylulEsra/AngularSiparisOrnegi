import { Component } from '@angular/core';

@Component({
  selector: 'app-poset-rengi-ornek',
  templateUrl: './poset-rengi-ornek.component.html',
  styleUrls: ['./poset-rengi-ornek.component.css']
})
export class PosetRengiOrnekComponent {

  renk= "white";
  yesilTiklandi(){
    this.renk = "green";
  }
  morTiklandi(){
    this.renk = "purple";
  }
  maviTiklandi(){
    this.renk = "blue";
  }


}
