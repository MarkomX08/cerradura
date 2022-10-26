import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../Materials/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TokenComponent } from './token/token.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    TokenComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    NgApexchartsModule
  ]
})
export class ComponentsModule { }
