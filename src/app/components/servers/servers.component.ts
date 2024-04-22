import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    ProgressBarModule,
    TooltipModule,
    NgFor,
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  servers = [
    {
      title: 'Сервер 1',
      online: '50',
    },
    {
      title: 'Сервер 2',
      online: '80',
    },
    {
      title: 'Сервер 3',
      online: '10',
    },
  ]
}
