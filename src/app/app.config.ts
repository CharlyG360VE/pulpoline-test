import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxSpinnerModule } from "ngx-spinner";
import { SPINNER_INTERCEPTOR_FN } from '@/interceptors/loaderFn.interceptor';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ActionReducer, MetaReducer, provideStore } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage'
import { APP_REDUCER } from '@/ngrx/app.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: [
        'favorites',
        'history'
      ],
      rehydrate: true
    }
  )(reducer);
}

const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([SPINNER_INTERCEPTOR_FN])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideAnimationsAsync(),
    importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'timer' })),
    provideStore(APP_REDUCER, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
