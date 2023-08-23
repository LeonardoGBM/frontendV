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
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { CaruselComponent } from './carusel/carusel.component';
import { CarouselModule } from 'primeng/carousel';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { FormularioAComponent } from './formulario-a/formulario-a.component';
import { StepsComponent } from './steps/steps.component';
import { RegistropuertosComponent } from './registropuertos/registropuertos.component';
import { SliderComponent } from './slider/slider.component';
import { SliderModule } from 'primeng/slider';



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
    AplicacionesComponent,
    CaruselComponent,
    TabmenuComponent,
    FormularioAComponent,
    StepsComponent,
    RegistropuertosComponent,
    SliderComponent,
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
    DropdownModule,
    CarouselModule,
    TabMenuModule,
    TabViewModule,
    StepsModule,
    SliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
