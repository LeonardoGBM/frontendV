import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ label: 'Computer' }];

      this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  
}

