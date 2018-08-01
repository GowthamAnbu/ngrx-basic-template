import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'mock-zooko-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  user: any = {};
  errors: any;
  showError = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(signinRequestForm: NgForm) {
    console.log(signinRequestForm.value);
    /* this.authService.login(this.user).subscribe(currentUser => {
      if (currentUser.is_first_time === 0) {
        this.router.navigate(['/user/profile/update']);
      } else {
        this.router.navigate(['/user/home']);
      }
      // currentUser.is_first_time=1;
    }, error => {
      signinRequestForm.controls['password'].reset();
      this.errors = error;
      this.showError = true;
    }); */
  }
}
