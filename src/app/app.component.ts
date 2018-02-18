import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showMenu = true;

  constructor(private router: Router) {
    router.events.subscribe( (event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.showMenu = false;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
