import { Component} from '@angular/core';

@Component({
  selector: 'app-teslimat-bilgileri-ornek',
  templateUrl: './teslimat-bilgileri-ornek.component.html',
  styleUrls: ['./teslimat-bilgileri-ornek.component.css']
})
export class TeslimatBilgileriOrnekComponent {

  adSoyad:string = "Migros Marketler Zinciri";
  baslik: string= "Firma Bilgileri";

  adSoyadNe():string {
    return this.adSoyad;
  }

}
