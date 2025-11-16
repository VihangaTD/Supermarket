import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Dashboard,NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('super-market');
}
