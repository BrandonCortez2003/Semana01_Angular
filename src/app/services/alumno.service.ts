import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  constructor(private http:HttpClient) { }

  public registrarAlumno(alumno:Alumno) :Observable<any>{
    return this.http.post("http://localhost:8090/url/alumno",alumno);
}
}
