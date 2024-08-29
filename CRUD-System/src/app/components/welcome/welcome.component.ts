import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent {

  constructor(private router: Router) {} // Injeta Router

  GoToCreate() {
    this.router.navigate(['/create']); // Navega para Create
  }
}
