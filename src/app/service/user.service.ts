import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoginRequest } from '../model/LoginRequest';
import { environnement } from 'src/environnement';
import { User } from '../model/User';
import { SignupRequest } from '../model/SignupRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environnement.apiUrl
  headers = new HttpHeaders()

  constructor(private http: HttpClient) { }

  // Login
  login(loginRequest: LoginRequest): Observable<any>{
    return this.http.post(this.url + "/auth/signin", loginRequest)
  }

  //signup
  signup(signupRequest: SignupRequest): Observable<any>{
    return this.http.post(this.url + "/auth/signup", signupRequest)
  }

  // get user info
  getUser(): Observable<User>{
    this.getHeader()
    return this.http.get<User>(this.url + "/user/info",  {headers: this.headers, withCredentials: true}).pipe(
      catchError(this.handleError)
    )
  }
  // generate new apikey
  generateApikey(): Observable<any>{
    this.getHeader()
    return this.http.get<any>(this.url + "/user/apikey",  {headers: this.headers, withCredentials: true}).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error: any){
    console.log(error)
    return throwError(() => {return "error"})
  }
  getHeader(){
    let accessToken = localStorage.getItem("accessToken")

    this.headers = new HttpHeaders()
    .set('Authorization', `Bearer ${accessToken}`)
  }
}
