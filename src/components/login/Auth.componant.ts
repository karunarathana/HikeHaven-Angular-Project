import { Component } from "@angular/core";

@Component({
    standalone: true, //Above angular 18 standalone is true
    selector: 'login-component',
    styleUrl:'./login.component.css',
    templateUrl: './login.component.html'
})
export class AuthComponent{
    title = 'Authentication';
}