import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editorial } from '../models/editorial.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(private http:HttpClient) { }

  public registrarEditorial(editorial:Editorial) :Observable<any>{
    return this.http.post("http://localhost:8090/url/editorial",editorial);
}


}