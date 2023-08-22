import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { CardComponent } from './card/card.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { NavComponent } from './nav/nav.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { TablaComponent } from './tabla/tabla.component';
import { TableModule } from 'primeng/table';
import { BuscadorComponent } from './buscador/buscador.component';
import { AutoFocusModule } from 'primeng/autofocus';
import { OpcionesComponent } from './opciones/opciones.component';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BreadcrumComponent,
    NavComponent,
    ClientesComponent,
    InicioComponent,
    SidebarComponent,
    TablaComponent,
    BuscadorComponent,
    OpcionesComponent,
    LoginComponent,
    CategoriaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    BreadcrumbModule,
    CardModule,
    SidebarModule,
    TableModule,
    AutoFocusModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
