import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UsersDbService } from '../../services/users-db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section>
      <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" id="firstName" class="form-control" formControlName="firstName">

        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" id="lastName" class="form-control" formControlName="lastName">

        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" class="form-control" formControlName="username">

        <div class="row">
          <div class="col-6">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" formControlName="password">
          </div>
          <div class="col-6">
            <label for="passwordConfirm" class="form-label">Confirm Password</label>
            <input type="password" id="passwordConfirm" class="form-control" formControlName="passwordConfirm">
          </div>
        </div>


        <button type="submit" class="btn btn-primary" [disabled]="!signUpForm.valid">Create account</button>
      </form>
      <a routerLink="">Home</a>
    </section>
  `,
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {
  
  signUpForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  

  newUser!: User

  //private = inject(UsersDbService)

  constructor(private service: UsersDbService){}

  onSubmit(){

    let myControls = this.signUpForm.controls
    let firstName: string
    let id: number = this.service.usersList.length

    if(myControls.password.value === myControls.passwordConfirm.value){
      this.newUser = {
        id: id,
        username: myControls.username.value ?? '',
        firstName: this.signUpForm.value.firstName ?? '',
        lastName: myControls.lastName.value ?? '',
        password: myControls.password.value ?? '',
        signUpDate: new Date().toLocaleString(),
        lastSession: new Date().toLocaleString(),
      }
      this.service.usersList.push(this.newUser)
      alert('Your account have been created')
      console.log(this.service.usersList);
      this.signUpForm.reset();

      
    }else {
      alert("Your passwords don't match")
    }
  }
}
