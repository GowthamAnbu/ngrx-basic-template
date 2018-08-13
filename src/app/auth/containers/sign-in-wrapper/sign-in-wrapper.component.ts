import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';
import { AppState } from '../../../state/app.interfaces';
import { Login } from '../../../state/auth/auth.actions';
import { Authenticate } from '../../../state/auth/auth.model';

@Component({
  selector: 'mock-zooko-sign-in-wrapper',
  templateUrl: './sign-in-wrapper.component.html',
  styleUrls: ['./sign-in-wrapper.component.css']
})
export class SignInWrapperComponent implements OnInit {
  user: Authenticate = { username: '', password: '' };
  errors: any;

  constructor(private _authService: AuthService, private _router: Router, public snackBar: MatSnackBar, private store: Store<AppState>) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string, config?: MatSnackBarConfig ) {
    const customConfig: MatSnackBarConfig = {
      duration: 5000
    };
    const globalConfig: MatSnackBarConfig = config || customConfig;
    this.snackBar.open(message, action, globalConfig);
  }

  login(payload) {
    this.user = payload;
    this.store.dispatch(new Login(this.user));
    /* this._authService.login(this.user).subscribe((currentUser: User) => {
      this.openSnackBar('successfully logged in', null, {duration: 5000, panelClass: ['primary-snackbar']});
      this._router.navigate(['/user/dashboard']);
    }, error => {
      this.errors = error;
      this.openSnackBar('username or password is incorrect', null, {duration: 5000, panelClass: ['secondary-snackbar']});
      this._router.navigate(['/auth/login']);
    }); */
  }
}
