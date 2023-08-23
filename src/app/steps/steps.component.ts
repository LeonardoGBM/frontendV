import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  providers: [MessageService]
})
export class StepsComponent implements OnInit {
    items: MenuItem[] | undefined;

    activeIndex: number = 0;

    constructor(public messageService: MessageService) {}

    onActiveIndexChange(event: number) {
        this.activeIndex = event;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Datos de aplicación',
                command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
            },
            {
                label: 'Bases de datos',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Second Step', detail: event.item.label})
            },
            {
                label: 'Link y credenciales',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Third Step', detail: event.item.label})
            }
        ];
    }
}