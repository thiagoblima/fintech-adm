import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];


export const routing = RouterModule.forRoot(appRoutes);
