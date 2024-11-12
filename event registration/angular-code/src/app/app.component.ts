import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventFormComponent], // Do not import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
