import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() control!: FormControl;
  @Input() fieldName!: string;

  constructor() {}

  get errorMessage() {
    if (this.control.touched && this.control.errors) {
      for (let key in this.control.errors) {
        if (this.control.errors.hasOwnProperty(key)) {
          return this.getErrorMessage(key, this.control.errors[key]);
        }
      }
    }
    return null;
  }

  private getErrorMessage(type: string, params: any) {
    const errorMessages = {
      required: `${this.fieldName} is required.`,
      minlength: `The ${this.fieldName} must be at least ${params.requiredLength} characters long.`,
      maxlength: `The ${this.fieldName} must be less than ${params.requiredLength + 1} characters long.`,
      pattern: `Please enter a valid ${this.fieldName}.`,
      email: `Please enter a valid email address.`
    };
    return errorMessages[type];
  }
}
