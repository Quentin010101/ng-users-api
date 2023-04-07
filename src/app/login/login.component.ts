import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ngOnInit(){
    this.addAll()
  }


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    addresse: new FormGroup({
      number: new FormControl,
      street: new FormControl,
      city: new FormControl,
    }),
    all : new FormArray([
      new FormControl('')
    ]
    )
  })
  get all() {
    return this.loginForm.get('all') as FormArray;
  }
  addAll() {
    this.all.push(new FormControl());
  }
  onSubmit(){
    console.warn(this.loginForm.value);
  }

  change(e: Event){
    let result = (e.target as HTMLInputElement)
    console.log(result.checked)
  }
}
