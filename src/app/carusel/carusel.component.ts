import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent {
  responsiveOptions=[]
  products=[{
    id:1, 
    name:"fgfsdg",
    price:44,

  },
  {
    id:2,
    name:"fgfsdg",
    price:44,
  },

  {
    id:3,
    name:"fgfsdg",
    price:44,
  },
  {
    id:5,
    name:"fgfsdg",
    price:44,
  }
];
}