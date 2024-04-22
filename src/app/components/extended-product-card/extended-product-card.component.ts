import { Component, Input } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-extended-product-card',
  standalone: true,
  imports: [],
  templateUrl: './extended-product-card.component.html',
  styleUrl: './extended-product-card.component.css'
})
export class ExtendedProductCardComponent {
  constructor(public dialogConfig: DynamicDialogConfig) {}
}
