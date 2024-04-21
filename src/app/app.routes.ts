import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsPageComponent
  }
];
