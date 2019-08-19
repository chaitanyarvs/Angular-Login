import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user-login';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/allUsers`);
  }

  login(username: string, password: string) {
    return this.http.post(`${baseUrl}/login`, { username, password });
  }

}
