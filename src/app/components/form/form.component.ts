import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { User } from '../../interfaces/user';
import { UsersDbService } from '../../services/users-db.service';
import { RouterLink, NavigationExtras } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <form [formGroup]="loginForm" (submit)="onSubmit()">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" class="form-control" formControlName="user" required>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" formControlName="password" required>
      </div>
      
        <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Log in</button>
      
        <p class="mt-3">New around here? <a routerLink="/signUpForm-component">Create account</a></p>
      
      </form>
  `,
  styleUrl: './form.component.css'
})
export class FormComponent {

  usersDbService = inject(UsersDbService);

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(){
    if(this.usersDbService.checkUser(this.loginForm.controls.user.value!, this.loginForm.controls.password.value!)){
      this.loginForm.reset();
    }
  }
}
