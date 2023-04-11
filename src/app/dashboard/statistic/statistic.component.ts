import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
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
