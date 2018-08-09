import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';

import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';

const materialImports = [MatSnackBarModule];


/**
 * provide the services that are shared across here
 */
const providers = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialImports
  ],
  declarations: [
    SimpleLayoutComponent,
    FullLayoutComponent,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}


