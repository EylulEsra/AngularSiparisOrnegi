import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PosetRengiOrnekComponent } from './poset-rengi-ornek/poset-rengi-ornek.component';
import { ReyonBindingOrnekComponent } from './reyon-binding-ornek/reyon-binding-ornek.component';
import { SiparisBindingOrnekComponent } from './siparis-binding-ornek/siparis-binding-ornek.component';
import { SiparisVermeBindingOrnekComponent } from './siparis-verme-binding-ornek/siparis-verme-binding-ornek.component';
import { TeslimatBilgileriOrnekComponent } from './teslimat-bilgileri-ornek/teslimat-bilgileri-ornek.component';
import { TwoWayBindingOrnekComponent } from './two-way-binding-ornek/two-way-binding-ornek.component';
import { NgClassOrnekComponent } from './ng-class-ornek/ng-class-ornek.component';
import { NgForOrnekComponent } from './ng-for-ornek/ng-for-ornek.component';
import { NgStyleOrnekComponent } from './ng-style-ornek/ng-style-ornek.component';
import { AltOrnekComponent } from './alt-ornek/alt-ornek.component';
import { UstOrnekComponent } from './ust-ornek/ust-ornek.component';


@NgModule({
  declarations: [
    AppComponent,
    PosetRengiOrnekComponent,
    ReyonBindingOrnekComponent,
    SiparisBindingOrnekComponent,
    SiparisVermeBindingOrnekComponent,
    TeslimatBilgileriOrnekComponent,
    TwoWayBindingOrnekComponent,
    NgClassOrnekComponent,
    NgForOrnekComponent,
    NgStyleOrnekComponent,
    AltOrnekComponent,
    UstOrnekComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
