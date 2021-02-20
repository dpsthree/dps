import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, startWith, tap } from 'rxjs/operators';

import { User } from './subscribe.service';

const users: User[] = [
  {
    firstName: 'John',
    lastName: 'Lennon'
  },
  {
    firstName: 'Paul',
    lastName: 'McCartney'
  },
  {
    firstName: 'Ringo',
    lastName: 'Star'
  },
  {
    firstName: 'George',
    lastName: 'Harrison'
  }
];

@Component({
  selector: 'app-subscribe-demo',
  templateUrl: './subscribe-demo.component.html',
  styleUrls: ['./subscribe-demo.component.css']
})
export class SubscribeDemoComponent {
  filterControl = new FormControl('');
  users: Observable<User[]>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.users = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((term: string) => {
        if (term) {
          return users.filter(user => user.firstName.includes(term));
        }
        return users;
      })
    );

    // TODO: sync with the URL
  }
}
