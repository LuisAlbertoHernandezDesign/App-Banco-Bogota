import { Component, OnInit } from '@angular/core';
import {Empleado} from './empleado';
import {EmpleadoService} from './empleado.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-clientes',
  templateUrl: './empleados.component.html',
})
export class EmpleadosComponent implements OnInit {


  public clientes: Empleado[];

  constructor(private clienteService: EmpleadoService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
    clientes => this.clientes = clientes                // Escrito en typeScript
    //function (clientes) {this.clientes = clientes}        //Escrito de otra forma
  );
  }

  delete (cliente:Empleado): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Esta Seguro?',
      text: `Seguro desea eliminar al Empleado ${cliente.nombre} ${cliente.apellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        //eliminar cliente del listado, y se actualice en automatico
        this.clientes=this.clientes.filter(cli => cli !== cliente)
        //filter revisa todos los clientes y
        //si es distinto al cliente que vamos a eliminar entonces lo mostramos en la lista
        this.clienteService.delete(cliente.id).subscribe(
        response => {
          Swal.fire('Empleado Eliminado!',`Empleado ${cliente.nombre} eliminado con exito.`,'success')
        } )
        swalWithBootstrapButtons.fire()
      }
    }
  )
  }


}
