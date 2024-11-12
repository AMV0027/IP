import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarriageValidatorComponent } from './marriage-validator/marriage-validator.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarriageValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
