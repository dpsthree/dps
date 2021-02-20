import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';

import { TopromiseDemoComponent } from './topromise-demo.component';
import { TopromiseService } from './topromise.service';

const routes: Routes = [{ path: '', component: TopromiseDemoComponent }];

@NgModule({
  declarations: [TopromiseDemoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [TopromiseService],
})
export class TopromiseDemoModule {}
