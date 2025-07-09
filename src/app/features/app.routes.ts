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
        path: 'projects',
        loadComponent: () => import('./pages/projects-page/projects-page.component'),
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products-page/products-page.component'),
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
