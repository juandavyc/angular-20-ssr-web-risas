import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const featuresRouter: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us-page/about-us-page.component'),
      },
      {
        path: 'sustainable-construction',
        loadComponent: () => import('./pages/sustainable-construction-page/sustainable-construction-page.component'),
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products-page/products.routes'),
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us-page/contact-us-page.component'),
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

export default featuresRouter;
