import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DateSortPipe } from './pipes/date-sort.pipe';
import { OnlyNumberDirective } from './directives/only-number.directive';

const components = [
  DateSortPipe,
  OnlyNumberDirective
];

/**
 * provide the services that are shared across here
 */
const providers = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    };
  }
}
