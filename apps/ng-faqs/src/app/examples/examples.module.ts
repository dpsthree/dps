import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
  },
];
@NgModule({
  declarations: [ExamplesComponent],
  imports: [CommonModule, MatTableModule, RouterModule.forChild(routes)],
})
export class ExamplesModule {}
