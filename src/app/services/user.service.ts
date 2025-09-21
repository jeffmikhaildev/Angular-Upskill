import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  getSelectedUser(id: string | number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  deleteUser(id: string | number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user);
  }
}
