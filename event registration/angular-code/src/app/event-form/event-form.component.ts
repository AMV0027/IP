import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  registrationData = {
    fullName: '',
    email: '',
    phone: '',
    event: 'tech'
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
