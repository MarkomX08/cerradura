import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ConexionService } from 'src/app/services/conexion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrosUsuarios } from '../interfaces/seguridad';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnDestroy {
  nuevo: RegistrosUsuarios = {
    nombre: '',
    apellido: '',
    correo: '',
    constrasena: ''
  }
  Formulario: FormGroup = this.fb.group({
    id: [],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    apellido: [, [Validators.required, Validators.minLength(0)]],
    correo: [, [Validators.required, Validators.minLength(0)]]
  });

  Lista: any = [];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private activedRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private conexion: ConexionService) {
    const id = this.activedRouter.snapshot.params['id'];
    this.usuarios();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  imprimir() {
    window.print();
  }
  usuarios() {
    this.conexion.Get('seguridad', 'GetUsers').subscribe((dato: any) => {
      console.log(dato);
      this.Formulario.patchValue({
        id: dato.id
      });
      this.Lista = dato.reverse();
    })
  }


  delete(id: any) {
    Swal.fire({
      title: '¿Quieres eliminar este usuario?',
      text: "Una vez eliminado no hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.conexion.Post('seguridad', 'Delete', { 'id': id }).subscribe((dato: any) => {
          console.log(dato);
          if (dato['estatus']) {
            this.usuarios();
            Swal.fire(
              '!Eliminado¡',
              'El usuario ha sido Eliminado',
              'success'
            )
          };
        });
      };
    });

  }
}