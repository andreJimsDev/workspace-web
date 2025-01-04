import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthFacade } from '../../infrastructure/facade/auth.facade';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return inject(AuthFacade)._isLoggedIn()
    ? true
    : inject(Router).createUrlTree(['/user/login']);
};
