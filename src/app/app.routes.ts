import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'news',
    component: ProductsPageComponent
  },
  {
    path: 'faq',
    component: FaqPageComponent
  },
];
