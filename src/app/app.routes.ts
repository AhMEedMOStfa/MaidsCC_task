import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserService } from './core';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('@features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'user-details/:id',
    loadComponent: () =>
      import('@features/user-details/user-details.component').then(
        (c) => c.UserDetailsComponent
      ),
    // resolve: {
    //   userDetails: (activatedRoute: ActivatedRouteSnapshot) => {
    //     return inject(UserService)
    //       .getUserById(activatedRoute.params['id'])
    //       .pipe(map((res) => res.data));
    //   },
    // },
  },
];
