import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FerreteriaComponent } from './componentes/ferreteria/ferreteria/ferreteria.component';
import { MuebleriaComponent } from './componentes/muebleria/muebleria/muebleria.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'ferreteria', component: FerreteriaComponent, pathMatch:'full' },
  { path: 'muebleria', component: MuebleriaComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
