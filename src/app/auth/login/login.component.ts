import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../model/LoginRequest';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({})
  loginRequest: LoginRequest = new LoginRequest
  errorMessage: string = ''

  constructor(private _authService: AuthService){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl(this.loginRequest.username, Validators.required),
      password: new FormControl(this.loginRequest.password, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    this._authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data)
        
      },
      error: (error) => {
        this.errorMessage = "Wrong credentials."
        this.loginForm.reset()
        console.log(error)
      }
    })
  }
}
