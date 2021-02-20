import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  constructor() {}
}
