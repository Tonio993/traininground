import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TgInputComponent),
      multi: true
    }
  ]
})
export class TgInputComponent implements OnInit, ControlValueAccessor {
  @Input() readonly: boolean = false;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() hasDeleteButton: boolean = false;

  @Output() delete = new EventEmitter();

  inputValue = '';
  propagateChange = (_: string) => {};
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() { }

  ngOnInit() {}

  get value() {
    return this.inputValue;
  }

  set value(val) {
    if( val !== undefined && this.inputValue !== val) {
      this.inputValue = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }


}