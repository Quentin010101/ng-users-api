import { Component } from '@angular/core';
import {  User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  user: User = new User()

  constructor(private _userService: UserService){}

  ngOnInit(){
    this._userService.getUser().subscribe({
      next: (data) => {
        console.log(data)
        this.user = data
      },
      error: (error) => console.log(error)
    })
  }

}
