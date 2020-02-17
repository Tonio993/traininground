import { Component, Input, HostListener, Output, EventEmitter, OnInit } from '@angular/core';

import { Point } from './point';

import { SvgManagerService } from '../svg-manager.service';

@Component({
  selector: '[draggable-dot]',
  templateUrl: './draggable-dot.component.html',
  styleUrls: ['./draggable-dot.component.scss']
})
export class DraggableDotComponent implements OnInit {
  @Input() private position : Point;

  @Output() delete = new EventEmitter<any>();

  constructor(private svg : SvgManagerService) {}

  ngOnInit() {
  }

  onMousedown(event : MouseEvent) {
    switch (event.button) {
      case 0:
        this.svg.setSelected(this.position);
        this.svg.setStartingDotPosition(this.position);
        this.svg.setStartingMousePosition({x: event.x, y: event.y});
        break;
      case 2:
        this.delete.emit();
    }
  }

  onMouseup() {}

  onMousemove(event : MouseEvent) {}

  onMouseleave(event : MouseEvent) {}

}