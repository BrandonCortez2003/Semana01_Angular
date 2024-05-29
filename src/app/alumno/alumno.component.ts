import { Component } from '@angular/core';
import { AppMaterialModule } from '../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilService } from '../services/util.service';
import { Pais } from '../models/pais.model';
import { Alumno } from '../models/alumno';
import { AlumnoService } from '../services/alumno.service';
import { Modalidad } from '../models/modalidad';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {

  lstPais: Pais[] = [];
  lstModalidad: Modalidad[] = [];

  objAlumno: Alumno = {
    nombres: '',
    apellidos: '',
    telefono: '',
    celular: '',
    dni: '',
    correo: '',
    tipoSangre: '',
    pais: {
      idPais: -1,
    },
    modalidad: {
      idDataCatalogo: -1,
    },
    fechaNacimiento: '',
  };
  constructor(private utilService:UtilService, private alumnoService:AlumnoService) { }

  ngOnInit(): void {
      this.utilService.listaPais().subscribe(data => {
        this.lstPais = data;
      });
      this.utilService.listaModalidad().subscribe(data => {
        this.lstModalidad = data;
      });
  }
  

  registraAlumno(){
      this.alumnoService.registrarAlumno(this.objAlumno).subscribe(data => {
            console.log(data);
            Swal.fire({
              title: "Resultado",
              text: data.mensaje,
              icon: "info"
            });
      });
  }
}