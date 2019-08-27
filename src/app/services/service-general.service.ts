import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  public viewButtomHeader:Boolean=false;
 
  constructor(private http: HttpClient) { }

  public getNoticias(): Observable<any> {
    return this.http.get("./assets/json/noticias.json");
 }

 public getCitas(): Observable<any> {
  return this.http.get("./assets/json/citas.json");
}
}
