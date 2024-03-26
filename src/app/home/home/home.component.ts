import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToAtestado() {
    this.router.navigate(['/atestado']);
  }
  navigateToFerias() {
    this.router.navigate(['/ferias']);
  }

}
function navigateToFerias() {
  throw new Error('Function not implemented.');
}

