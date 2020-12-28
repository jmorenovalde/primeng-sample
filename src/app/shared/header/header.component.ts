import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * The header component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Constructor of the component
   * @param router {Router} the router to move to home when run the goHome method.
   * @constructor
   */
  constructor(private router: Router) {}

  /**
   * Method to move the router link to home when we do a click at Sample PrimeNG.
   */
  public goHome() {
    this.router.navigate(['home']);
  }
}
