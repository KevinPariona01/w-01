import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FerreteriaComponent } from './componentes/ferreteria/ferreteria/ferreteria.component';
import { MuebleriaComponent } from './componentes/muebleria/muebleria/muebleria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FerreteriaComponent,
    MuebleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
