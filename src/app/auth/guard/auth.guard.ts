import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, take, mergeMap } from 'rxjs/operators';
import * as fromAuth from '../../state/auth';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromAuth.State>) {}
  canActivate(): Observable<boolean> | boolean  {
    return this.checkStoreAuthentication().pipe(
      mergeMap(storeAuth => {
        if (storeAuth) {
          return of(true);
        }
        return this.checkApiAuthentication();
      }),
      map(storeOrApiAuth => {
        if (storeOrApiAuth === false) {
          this.router.navigate(['/auth/login']);
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
