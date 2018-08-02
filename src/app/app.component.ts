import { Component } from '@angular/core';

let primeNums = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primos';
  numbers = primeNums;
	}

}



