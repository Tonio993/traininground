import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[tgColor]'
})
export class ColorDirective {
  @Input() color: string;

  constructor() { }

}