import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { appMetaReducers, appReducer } from './app.reducer';
import { CustomRouterStateSerializer } from './shared/utils';
import { SnackbarEffects } from 'src/app/state/shared/snackbar/snackbar.effects';
import { AuthEffects } from 'src/app/state/auth/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    EffectsModule.forRoot([SnackbarEffects, AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        /**
         * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
         * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
         * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
         */
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
