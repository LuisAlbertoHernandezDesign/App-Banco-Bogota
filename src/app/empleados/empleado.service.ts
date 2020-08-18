import { Injectable } from '@angular/core';
import {Empleado} from './empleado';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
  export class EmpleadoService {
     private urlEndPoint:string ='http://localhost:8080/api/empleados';
     private httpHeaders = new HttpHeaders({'content-Type':'application/json'});

  constructor(private http: HttpClient) {}
  getClientes(): Observable<Empleado[]>{

    return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Empleado[]));
  }
 create(cliente:Empleado): Observable<Empleado>{
   return this.http.post<Empleado>(this.urlEndPoint,cliente,{headers: this.httpHeaders})
 }
 getCliente(id:any):Observable<Empleado>{
   return this.http.get<Empleado>(`${this.urlEndPoint}/${id}`)
 }

update (cliente:Empleado): Observable<Empleado>{
  return this.http.put<Empleado>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.httpHeaders})
}
delete (id: number): Observable<Empleado> {
  return this.http.delete<Empleado>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
}

}
