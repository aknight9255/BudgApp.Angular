import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
email = new FormControl('', [Validators.required, Validators.email]);
password = new FormControl('', [Validators.required]);
confirmpassword = new FormControl('', [Validators.required]);

_registerForm: FormGroup;
error: boolean;
message: string;

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter an email' :
        this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a password' :
        this.password.hasError('password') ? 'Password does not meet requirements ' :
        '';
  }

  getErrorMessageConfirmPassword() {
    return this.confirmpassword.hasError('required') ? 'You must confirm your password' :
        this.confirmpassword.hasError('password') ? 'Passwords do not match' :
        '';
  }

  constructor(private _form: FormBuilder,private _authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
    // this._registerForm = this._form.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // });
  }

  createForm(){
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit(){
    console.log(this._registerForm.value);
    this.ErrorMsg();
    this._authService.register(this._registerForm.value).subscribe( () => this._authService.login(this._registerForm.value));
  }

  ErrorMsg(){
    if (this._registerForm.invalid || this._registerForm) {
      this.error = true;
      this.message = "This is an error message"
      return;
    }
  }

}
