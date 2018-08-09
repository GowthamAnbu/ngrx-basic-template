import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'mock-zooko-sign-in-wrapper',
  templateUrl: './sign-in-wrapper.component.html',
  styleUrls: ['./sign-in-wrapper.component.css']
})
export class SignInWrapperComponent implements OnInit {
  user: any = {};
  errors: any;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  login(payload) {
    this.user = payload;
    console.log(this.user);
    this._authService.login(this.user).subscribe(currentUser$ => {
      // TODO  notify user about error and redirect to login page
      this.isEmptyObject(currentUser$.value) ? this._router.navigate(['/auth/login']) : this._router.navigate(['/user/dashboard']);
    }, error => {
      this.errors = error;
    });
  }
}
