import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LoginRequest } from '../model/LoginRequest';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { SignupRequest } from '../model/SignupRequest';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private state
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private _userService: UserService, private router: Router) {
    const token = localStorage.getItem('accessToken')
    this._isLoggedIn$.next(!!token)
   }

  login(loginRequest : LoginRequest){
    return this._userService.login(loginRequest).pipe(
      tap((response: any) => {
        if(response.accessToken){
          this._isLoggedIn$.next(true)
          localStorage.setItem('accessToken', response.accessToken)
          this.router.navigate(['dashboard'])
        }
      })
    )
  }

  signup(signupRequest: SignupRequest): Observable<HttpResponse<any>>{
    return this._userService.signup(signupRequest).pipe(
      tap((response: any) => {
        this.router.navigate(['login'])
      })
    )
  }

  logout(){
    localStorage.removeItem('accessToken')
    this._isLoggedIn$.next(false)
  }
}
