import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customScrollbar]'
})
export class ScrollbarDirective {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    let html : string = this.el.nativeElement.innerHTML;
    console.log(html);

  }
  

}