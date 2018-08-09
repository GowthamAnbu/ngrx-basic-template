import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWrapperComponent } from './sign-in-wrapper.component';

describe('SignInWrapperComponent', () => {
  let component: SignInWrapperComponent;
  let fixture: ComponentFixture<SignInWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
