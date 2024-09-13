import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthState } from 'src/app/state/auth/auth.reducer';

export const authGuard = () => {
  const store = inject(Store<AuthState>);
  const router = inject(Router);

  return store.select('auth').pipe(
    map((authState) => {
      if (!authState.isAuthenticated) {
        router.navigate(['/login']); // Redirect to login if not authenticated
        return false;
      }
      return true;
    })
  );
};
