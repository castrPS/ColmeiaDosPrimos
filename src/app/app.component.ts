import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primos';
  numbers = [];

  isPrime (num: number): Boolean {
    var limit=Math.sqrt(num);
    for ( var i = 2; i <= limit; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
	}

  generatePrimeNumbers (): void {
  	this.numbers = [{id: 2}];
		for (var i = 3; i<100; i++){
			if ( this.isPrime(i) ) {
				this.numbers = [{id: i}].concat(this.numbers);
				
			}
		}
  }

  trackByFn(index, item) {
    return index;
  }
}



