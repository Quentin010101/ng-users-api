import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements ControlValueAccessor{
  value: string = ''
  isDisabled: boolean = false
  
  onChange: any = () => {}
  onTouched: any = () => {}

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn
  }

  onInput(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.value = value
    this.onChange(value)
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}