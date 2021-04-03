import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alt-ornek',
  templateUrl: './alt-ornek.component.html',
  styleUrls: ['./alt-ornek.component.css']
})
export class AltOrnekComponent {

@Input() sayi = 0;
@Input() Yas =12;



}
