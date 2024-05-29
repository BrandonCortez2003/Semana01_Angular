import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejemplo } from '../models/ejemplo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor(private http:HttpClient) { }
  

  public registraEjemplo(ejemplo:Ejemplo) :Observable<any>{
    return this.http.post("http://localhost:8090/url/ejemplo",ejemplo);
}


}