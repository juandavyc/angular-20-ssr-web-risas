import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';


const productsRouter: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductsPageComponent,
      },
      {
        path: 'bloques-reciclados',
        loadComponent: () => import('./pages/blocks-page/blocks-page.component'),
      },
      {
        path: 'kits-post-desastre',
        loadComponent: () => import('./pages/kits-post/kits-post.component'),
      },
      {
        path: 'mamposteria',
        loadComponent: () => import('./pages/mamposteria/mamposteria.component'),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default productsRouter;
