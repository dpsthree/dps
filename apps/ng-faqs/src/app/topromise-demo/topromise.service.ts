import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopromiseService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.post<User>('https://us-central1-dpsthree-7ff6f.cloudfunctions.net/demoUsers', {});
  }

  addUser(newUser: User) {
    return this.http.post('https://us-central1-dpsthree-7ff6f.cloudfunctions.net/demoUsers', newUser);
  }
}
