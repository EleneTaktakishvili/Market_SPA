import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private store: Store) {}

  onLogin(email: string, password: string) {
    this.store.dispatch(login({ credentials: { email, password } }));
  }
}
