import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'mock-zooko-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  @Input() user: any;
  @Input() errors: string;
  @Output() emitLogin = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(signinRequestForm: NgForm) {
    this.emitLogin.next(signinRequestForm.value);
    // TODO add validation and other stuffs here
  }
}
