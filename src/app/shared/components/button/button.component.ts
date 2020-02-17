import { Component, Input } from '@angular/core';
@Component({
  selector: 'tg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: String;
  @Input() color: String;
}