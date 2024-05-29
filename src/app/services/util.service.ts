import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';
import { Modalidad } from '../models/modalidad';
import { Catalogo } from '../models/catalogo';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }

  public listaPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>("http://localhost:8090/url/util/listaPais")
  }

  public listaModalidad(): Observable<Modalidad[]>{
    return this.http.get<Modalidad[]>("http://localhost:8090/url/util/listaGradoAutor")
  }
  
  public listaCatalogo(): Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>("http://localhost:8090/url/util/listaCatalogo")
  }





}
