import { Component, OnInit,ChangeDetectorRef, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';
import { ConexionService } from 'src/app/services/conexion.service';
import { RegistrosUsuarios } from '../interfaces/seguridad';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  nuevo: RegistrosUsuarios= {
    nombre: '',
    apellido: '',
    correo: '',
    constrasena: ''
  }
  Formulario: FormGroup = this.fb.group({
    id:[],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    apellido: [, [Validators.required, Validators.minLength(0)]],
    correo: [, [Validators.required, Validators.minLength(0)]]
  });

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private fb: FormBuilder,
    private conexion: ConexionService,
    private router: Router,
    private activedRouter: ActivatedRoute,
    private ps:SeguridadService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
    const id = this.activedRouter.snapshot.params['id'];
    this.ObtenerRegistro(id);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  ObtenerRegistro(id: any) {
    this.conexion.Post('seguridad', 'GetId', { 'id': id }).subscribe((dato: any) => {
      this.Formulario.patchValue({
        id: dato.id,
        nombre: dato.nombre,
        apellido: dato.apellido,
        correo: dato.correo
      });
    });
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  guardar() {
    console.log(this.Formulario.value);
    this.conexion.Post('seguridad', 'Update', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.router.navigate(['./components/usuarios']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se acualizo el usuario correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  };
}