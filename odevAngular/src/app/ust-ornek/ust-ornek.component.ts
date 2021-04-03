import { Component } from '@angular/core';

@Component({
  selector: 'app-ust-ornek',
  templateUrl: './ust-ornek.component.html',
  styleUrls: ['./ust-ornek.component.css']
})
export class UstOrnekComponent {

  degisken: number = 7;

  degiskeniDegistir(arg: number) {
    this.degisken =arg;
  }

}
