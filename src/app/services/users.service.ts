import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

import { Observable, catchError, throwError } from 'rxjs';
import { SubmitUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/User`;

  currentUserId: number = 0;
  currentUsername: string = '';
  currentPassword: string = '';
  currentEmail: string = '';
  currentFirstName: string = '';
  currentLastName: string = '';

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        if (error.status == 404){
          alert('User or password invalid');
        }
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getUsers() {
    return this.httpClient.get<User[]>(this.baseUrl)
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${username}`).pipe(catchError(this.handleError));
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
