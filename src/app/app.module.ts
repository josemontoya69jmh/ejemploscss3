import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListasComponent } from './listas/listas.component';
import { CirculoComponent } from './circulo/circulo.component';
import { ParrallaxComponent } from './parrallax/parrallax.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListasComponent, CirculoComponent, ParrallaxComponent ],

  // esto es para decirle con cual componenete empezar
  bootstrap:    [ ParrallaxComponent ]
})
export class AppModule { }
