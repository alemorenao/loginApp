import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { TripsComponent } from './components/trips/trips.component';

export const routes: Routes = [
    {
        title: 'Sign up',
        path: 'signUpForm-component',
        component: SignUpFormComponent
    },
    {
        title: 'Log in',
        path: '',
        component: FormComponent
    },
    {
        title: 'Trips',
        path: 'Trips',
        component: TripsComponent
    },
];
