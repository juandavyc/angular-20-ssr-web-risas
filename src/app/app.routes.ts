import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./features/app.routes'),
  },
  {
    path:'**',
    redirectTo:''
  }

];
