import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

import { Observable } from 'rxjs';
import { SubmitUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/User`;

  currentUserId: number = 0;
  currentUsername: string = '';

  getUsers() {
    return this.httpClient.get<User[]>(this.baseUrl)
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${username}`);
  }

  postUser(newUser: SubmitUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, newUser);
  }

  updateUser(updatedUser: User, id: number | null) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, updatedUser);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
