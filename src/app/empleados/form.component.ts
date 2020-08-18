import { Component, OnInit } from '@angular/core';
import {Empleado} from './empleado'
import {EmpleadoService} from './empleado.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'})

export class FormComponent implements OnInit {

  public cliente: Empleado = new Empleado()
  titulo: string="Agregar Empleado"
  constructor(
    private clienteService: EmpleadoService,
    private router:Router,
    private activatedRoute:ActivatedRoute){ }
ngOnInit(): void {
  this.cargarCliente() //Asi podemos cargar el metodo al iniciar la ventana del navegador
}
cargarCliente():void{
  this.activatedRoute.params.subscribe(params =>{
    let id = params['id']
    if(id){
      this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
    }
  })
}
public create(): void{
    console.log('Clicked')
    console.log(this.cliente)
    this.clienteService.create(this.cliente)
    .subscribe(cliente => {
    //response => this.router.navigate(['/clientesLuis'])//con esto redirige al listado de Clientes
    this.router.navigate(['/Empleados-Banco'])
    Swal.fire('Nuevo Empleado',`Empleado ${cliente.nombre} creado con exito!`,'success')
}
);
}
update ():void{
  this.clienteService.update(this.cliente)
  .subscribe(cliente =>{
  this.router.navigate(['/Empleados-Banco'])
  Swal.fire('Cliente Actulizado', `Cliente ${cliente.nombre} actualizado con exito`, 'success')
  //las comillas simples giradas son para agregar una varible, cliente.nombre
  }
  )
}

}
