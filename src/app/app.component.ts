import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  template: `
  <section class="container-sm px-5">
    <header class="container-sm p-2 mt-5 mb-2 bg-secondary text-white border">
      <!--<img style="max-width: 100px;" src="assets/The Walking Dog Transparente.png" alt="TWD's Logo" aria-hidden="true">-->
      <h1 class="text-center">The Walking Dog's first {{title}}!</h1>
    </header>
      <section>
        <router-outlet />
      </section>
  </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginApp';
}
