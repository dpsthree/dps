import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { TopromiseService, User } from './topromise.service';

@Component({
  selector: 'app-topromise-demo',
  templateUrl: './topromise-demo.component.html',
  styleUrls: ['./topromise-demo.component.css'],
})
export class TopromiseDemoComponent {
  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  users: Observable<User>;
  constructor(
    private service: TopromiseService,
    private snackBar: MatSnackBar
  ) {
    this.users = service.getUsers();
  }

  createUser() {
    // TODO: implement me
  }
}
