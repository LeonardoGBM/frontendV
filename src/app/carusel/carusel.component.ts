import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CaruselComponent {
  responsiveOptions=[]
  products=[{
    id:1, 
    bd:"BD relacional",
    puerto:51520,
    gestor:"postgres",
    nombre:"netlife",
    usuario:"info@manticore-labs.com",
    contrasena:"netlife",
    fecha:31-12-2023

  },
  {
    id:2,
    bd:"BD no relacional",
    puerto:51520,
    gestor:"postgres",
    nombre:"netlife",
    usuario:"info@manticore-labs.com",
    contrasena:"netlife",
    fecha:31-12-2023
  },

  {
    id:3,
    bd:"Link y credenciales",
    puerto:51520,
    gestor:"postgres",
    nombre:"netlife",
    usuario:"info@manticore-labs.com",
    contrasena:"netlife",
    fecha:31-12-2023
  },
  {
    id:5,
    puerto:51520,
    gestor:"postgres",
    nombre:"netlife",
    usuario:"info@manticore-labs.com",
    contrasena:"netlife",
    fecha:31-12-2023
  }
];
}