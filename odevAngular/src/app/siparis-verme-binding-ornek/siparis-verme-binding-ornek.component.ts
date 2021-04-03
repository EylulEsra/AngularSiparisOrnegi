import { Component } from '@angular/core';

@Component({
  selector: 'app-siparis-verme-binding-ornek',
  templateUrl: './siparis-verme-binding-ornek.component.html',
  styleUrls: ['./siparis-verme-binding-ornek.component.css']
})
export class SiparisVermeBindingOrnekComponent {
  goster: boolean =false;

  Degistir(){
    this.goster = !this.goster;
  }
  
}
