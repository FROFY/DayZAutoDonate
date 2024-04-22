import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExtendedProductCardComponent } from '../extended-product-card/extended-product-card.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    DividerModule,
    DynamicDialogModule,
  ],
  providers: [DialogService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) { }

  openPreview() {
    this.ref = this.dialogService.open(ExtendedProductCardComponent, { header: 'О товаре', data: { id: 1 } });
  }
}
