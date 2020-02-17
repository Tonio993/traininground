import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class NavbarService {

  constructor(private router: Router) {}

    isEnabled(): boolean {
      return true;
    }

}