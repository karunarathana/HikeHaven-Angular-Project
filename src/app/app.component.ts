import { Component } from '@angular/core';
import { AuthComponent } from '../components/login/Auth.componant';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Component({
  standalone : true,
  selector: 'app-root',
  imports: [AuthComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'best_hiking';
}
