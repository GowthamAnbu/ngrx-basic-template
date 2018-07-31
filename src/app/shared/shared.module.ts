import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DateSortPipe } from './pipes/date-sort.pipe';
import { OnlyNumberDirective } from './directives/only-number.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    DateSortPipe,
    OnlyNumberDirective
  ],
  exports: [
    DateSortPipe,
    OnlyNumberDirective
  ]
})
export class SharedModule { }
