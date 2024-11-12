import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marriage-validator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marriage-validator.component.html',
  styleUrl: './marriage-validator.component.css'
})
export class MarriageValidatorComponent {
  husbandAge: number | null = null;
  wifeAge: number | null = null;
  resultMessage: string = '';

  validate() {
    if (this.husbandAge! >= 21 && this.wifeAge! >= 18) {
      this.resultMessage = "Eligible for marriage";
    } else {
      this.resultMessage = "Not eligible for marriage";
    }
  }
}
