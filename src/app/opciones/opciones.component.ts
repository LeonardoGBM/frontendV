import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent {
  items: SelectItem[];
  
  selectedItem: string | undefined;

  constructor() {
      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
      }
  }
}