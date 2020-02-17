import { Injectable } from '@angular/core';

import { Point } from './draggable-dot/point';

@Injectable()
export class SvgManagerService {

  selected : Point;
  startingMousePosition : Point;
  startingDotPosition : Point;

  constructor() {}

  getSelected() {
    return this.selected;
  }

  setSelected(dot : Point) {
    this.selected = dot;
  }

  setStartingMousePosition(position : Point) {
    this.startingMousePosition = {...position};
  }

  setStartingDotPosition(position : Point) {
    this.startingDotPosition = {...position};
  }

  clearSelection() {
    this.selected = null;
    this.startingMousePosition = null;
    this.startingDotPosition = null;
  }

  moveSelected(position : Point) {
    if (this.selected) {
      this.selected.x = this.startingDotPosition.x + (position.x - this.startingMousePosition.x);
      this.selected.y = this.startingDotPosition.y + (position.y - this.startingMousePosition.y);
    }
  }

}