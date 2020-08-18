import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent      } from  './app.component';
import {HeaderComponent    } from './header/header.component';
import {FooterComponent    } from './footer/footer.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoService    } from './empleados/empleado.service';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './empleados/form.component';
import { FormsModule} from '@angular/forms';

const routes: Routes =[
  {path: '', redirectTo:'/Empleados-Banco', pathMatch: 'full' },
  {path: 'Empleados-Banco', component: EmpleadosComponent },
  {path: 'Empleados-Banco/form', component: FormComponent },
  {path: 'Empleados-Banco/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmpleadosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
