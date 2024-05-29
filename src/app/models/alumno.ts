import { Pais } from "./pais.model";
import { Modalidad } from './modalidad';
export class Alumno {

    idAlumno ?: number;
    nombres ?: string;
    apellidos ?: string;
    telefono ?: string;
    celular ?: string;
    dni ?: string;
    pais ?: Pais;
    modalidad ?: Modalidad
    correo ?: string;
    tipoSangre ?: string;
    fechaNacimiento ?: string; 
}
