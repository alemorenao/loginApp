import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  template: `

    <form [formGroup]="tripReport" (ngSubmit)="onSubmit()">
      <div class="row">
        <label for="date" class="form-label">Date</label>
        <div class="col-10">
          <input type="datetime" id="date" class="form-control" formControlName="date">
        </div>
        <div class="col-2">
          <button (click)="changeDate()" class="btn btn-primary">Change Date</button>
        </div>
      </div>
      <div>
        <label for="driver" class="form-label">Driver</label>
        <select name="driver" id="driver" formControlName="driver" class="form-select">
          <option value="gabriel">Gabriel</option>
          <option value="luis">Luis</option>
        </select>
      </div>

      <div>
        <label for="vehicle" class="form-label">Vehicle</label>
        <select name="vehicle" id="vehicle" formControlName="vehicle" class="form-select">
          <option value="aveo">Aveo</option>
          <option value="caninoMovil">Canino Móvil</option>
        </select>
      </div>

      <label for="client" class="form-label">Clients</label>
      <div class="row">
        @for (item of items; track $index) {
          <div [innerHTML]="addTrip"></div>
        }
      </div>
      <div class="row">
        <div class="col-10">
          <input type="text" class="form-control" id="client" formControlName="clients">
        </div>
        <div class="col-2">
          <button (click)="addMoreTrips()" class="btn btn-warning">+</button>
        </div>
      </div>
            
      <div class="my-2">
        <input type="radio" id="roundTrip" name="whatType" value="Round Trip" checked>
        <label for="roundTrip">Round Trip</label>
      </div>
      <div>
        <input type="radio" id="oneWay" name="whatType" value="One Way">
        <label for="oneWay">One Way</label>
      </div>
      <button type="submit" class="mt-3 btn btn-secondary">Notify trip</button>
    </form>
    
  `,
  styleUrl: './trips.component.css'
})
export class TripsComponent {
  
  tripReport = new FormGroup({
    date: new FormControl(new Date().toDateString()),
    driver: new FormControl(''),
    vehicle: new FormControl(''),
    clients: new FormControl(''),
    roundTrip: new FormControl(''),
  })

  items : string[] = []

  addTrip : string = "<span>Hello World</span>"
  
  onSubmit(){
    console.log('Submitted');
  }

  changeDate(){
    this.tripReport.controls.date.setValue('Mon Mar 03 1992')
  }

  addMoreTrips(){
    this.items.push('a')
  }
}
