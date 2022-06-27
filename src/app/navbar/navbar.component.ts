import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * routes user to the movies page
   */
  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * routes user to the profile page
   */
  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * logs a user out
   * clears the localStorage
   * re-routes to the welcome screen
   */
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }


}
