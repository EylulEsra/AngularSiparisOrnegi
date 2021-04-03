import { Component } from '@angular/core';

@Component({
  selector: 'app-siparis-binding-ornek',
  templateUrl: './siparis-binding-ornek.component.html',
  styleUrls: ['./siparis-binding-ornek.component.css']
})
export class SiparisBindingOrnekComponent {
  adet: number = 0;

  adetiArttir():void {
    this.adet++;
  }
  

}
