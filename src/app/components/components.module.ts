import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../Materials/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GraficaComponent } from './grafica/grafica.component';
import { NgChartsModule } from 'ng2-charts';
import { AgregarComponent } from './agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GraficaComponent,
    UsuariosComponent,
    AgregarComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
