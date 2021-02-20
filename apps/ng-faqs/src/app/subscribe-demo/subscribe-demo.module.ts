import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';

import { SubscribeDemoComponent } from './subscribe-demo.component';
import { SubscribeService } from './subscribe.service';

const routes: Routes = [{ path: '', component: SubscribeDemoComponent }];

@NgModule({
  declarations: [SubscribeDemoComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [SubscribeService],
})
export class SubscribeDemoModule {}
