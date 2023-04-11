import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.scss']
})
export class ApikeyComponent {
  @Input() apikey: string = ""
  code: string = "******************************"
  message: string = ''

  constructor(private _userService: UserService){

  }

  ngOnInit(){
    this.message = this.code
  }

  generateApiKey(){
    this._userService.generateApikey().subscribe({
      next: (data) => {
        this.apikey = data.apikey
        this.message === this.code ? '' : this.message = this.apikey 
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  toggleApiKey(){
    this.message === this.code ? this.message = this.apikey : this.message = this.code
  }

}
