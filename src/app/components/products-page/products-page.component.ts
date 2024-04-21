import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { ServersComponent } from '../servers/servers.component';
import { ProductsFilterComponent } from '../products-filter/products-filter.component';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProgressBarModule,
    TooltipModule,
    ServersComponent,
    ProductsFilterComponent,
    ProductCardComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
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
