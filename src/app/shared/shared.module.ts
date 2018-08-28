import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DateSortPipe } from './pipes/date-sort.pipe';
import { OnlyNumberDirective } from './directives/only-number.directive';

import {
  MatSnackBarModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';

const materialImports = [
  MatSnackBarModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  LayoutModule
];

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
    HttpModule,
    ...materialImports,
  ],
  declarations: [...components],
  exports: [...components, ...materialImports]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    };
  }
}
