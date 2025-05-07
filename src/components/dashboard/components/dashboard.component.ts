import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    message : string = '';
    username : string = '';
    title : string = "Ammata siri chamara"
    isDissable: boolean = false;
    fruits : string[] = ['Apple', 'Banana', 'Orange'];
    returnGreetingText(params:string){
      this.message = `Hellow ${params}`
    }
}
