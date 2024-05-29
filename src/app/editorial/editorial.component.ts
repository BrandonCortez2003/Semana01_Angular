import { Component } from '@angular/core';
import { Pais } from '../models/pais.model';
import { Editorial } from '../models/editorial.model';
import { UtilService } from '../services/util.service';
import { EditorialService } from '../services/editorial.service';
import Swal from 'sweetalert2'
import { AppMaterialModule } from '../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editorial',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './editorial.component.html',
  styleUrl: './editorial.component.css'
})
export class EditorialComponent {

  lstPais: Pais[] = [];

  objEditorial: Editorial = {
    razonSocial: '',
    direccion: '',
    ruc: '',
    gerente: '',
    pais: {
      idPais: -1,
    },
    fechaCreacion: '',
  };
  constructor(private utilService:UtilService, private editorialService:EditorialService) { }

  ngOnInit(): void {
      this.utilService.listaPais().subscribe(data => {
        this.lstPais = data;
      });
  }

  registraEditorial(){
      this.editorialService.registrarEditorial(this.objEditorial).subscribe(data => {
            console.log(data);
            Swal.fire({
              title: "Resultado",
              text: data.mensaje,
              icon: "info"
            });
      });
  }
}