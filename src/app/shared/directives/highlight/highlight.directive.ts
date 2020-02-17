import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tgHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#000000';
  }
}