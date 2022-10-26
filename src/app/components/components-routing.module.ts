import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TokenComponent } from './token/token.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'token', component: TokenComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'**',redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
