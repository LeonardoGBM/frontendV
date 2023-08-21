import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit{
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
   //   this.items = [{ label: 'Computer' }];

      this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
