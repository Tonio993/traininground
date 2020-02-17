import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#9eb2d1';

    var text = 'TrainingGround';
    var canvas = document.createElement("canvas");
    var fontSize = 24;
    canvas.setAttribute('height', '' + fontSize);
    var context = canvas.getContext('2d');
    context.fillStyle = '#ffffff8a';
    context.font = fontSize + 'px Montserrat';
    context.fillText(text, 0, fontSize);
    el.nativeElement.style.backgroundImage = 'url(' + canvas.toDataURL("image/png") + ')';
  }
}