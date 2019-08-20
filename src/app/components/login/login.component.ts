import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
_loginForm: FormGroup;
email = new FormControl('', [Validators.required, Validators.email]);
password = new FormControl('', [Validators.required]);

getErrorMessageEmail() {
  return this.email.hasError('required') ? 'You must enter your email' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}

getErrorMessagePassword() {
  return this.password.hasError('required') ? 'You must enter your password' :
      this.password.hasError('password') ? 'Not a valid password' :
          '';
}

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this._loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit(){
    console.log(this._loginForm.value);
    this._authService.login(this._loginForm.value);
  }

}

