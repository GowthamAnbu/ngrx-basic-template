import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take, mergeMap, catchError } from 'rxjs/operators';
import * as fromAuth from '../../state/auth';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromAuth.State>) {}
  canActivate(): Observable<boolean> | boolean {
    return this.checkStoreAuthentication().pipe(
      mergeMap(storeAuth => {
        if (storeAuth) {
          console.log(storeAuth);
          return of(true);
        }
        return this.checkApiAuthentication();
      }),
      map(storeOrApiAuth => {
        if (storeOrApiAuth === true) {
          this.router.navigate(['/user/dashboard']);
          return false;
        } else {
          return true;
        }
      }),
    );
  }


  checkStoreAuthentication() {
    return this.store.select(fromAuth.selectIsLoggedIn).pipe(take(1));
  }

  checkApiAuthentication() {
    return this.authService.isLoggedIn();
  }

}
