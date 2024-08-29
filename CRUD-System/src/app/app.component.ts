import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-System'; // Título

  constructor(private router: Router) {} // Injeta Router

  navigateToHome() {
    this.router.navigate(['/home']); // Navega para Home
  }

  navigateToCreate() {
    this.router.navigate(['/create']); // Navega para Create
  }

  navigateToRead() {
    this.router.navigate(['/read']); // Navega para Read
  }
}
