import { Component } from '@angular/core';

@Component({
  selector: 'app-reyon-binding-ornek',
  templateUrl: './reyon-binding-ornek.component.html',
  styleUrls: ['./reyon-binding-ornek.component.css']
})
export class ReyonBindingOrnekComponent {

  reyon: string = "";

  reyonSeciliyor(e: Event): void {
    this.reyon =(<HTMLInputElement>(e?.target))?.value;
  }

}
