import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'registro', component:RegistroComponent},
  {path:'consulta', component:ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
