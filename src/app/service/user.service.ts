import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/LoginRequest';
import { environnement } from 'src/environnement';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environnement.apiUrl

  constructor(private http: HttpClient) { }

  // Login
  login(loginRequest: LoginRequest): Observable<any>{
    return this.http.post(this.url + "/auth/signin", loginRequest)
  }
}
