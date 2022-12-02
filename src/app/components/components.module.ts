import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../Materials/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GraficaComponent } from './grafica/grafica.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    GraficaComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
