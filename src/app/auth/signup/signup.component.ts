import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequest } from 'src/app/model/SignupRequest';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup: SignupRequest = new SignupRequest()
  signupForm: FormGroup = new FormGroup({})

  constructor(private _authService: AuthService){}

  ngOnInit(){
    this.signupForm = new FormGroup({
      username: new FormControl(this.signup.username, Validators.required),
      email: new FormControl(this.signup.email, [Validators.required, Validators.email]),
      password: new FormControl(this.signup.password, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    this._authService.signup(this.signupForm.value).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => console.log(error)
    })
  }
}
