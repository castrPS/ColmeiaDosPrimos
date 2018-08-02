import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primos';
  numbers = [];
  actual=2;
  started = false;
  paused = false;
  stopped = false;

  isPrime (num: number): Boolean {
    var limit=Math.sqrt(num);
    for ( var i = 2; i <= limit; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
	}

	sleep(milliseconds: number): void {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
  	console.log(i);
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
	}

  generatePrimeNumber (num: number): number{
		for (var i = num+1; i>0; i++){
			if ( this.isPrime(i) ) {
				return i;
			}
		}
  }
  
  start (): void {
  	this.started = true;
  	this.paused = false;
  	this.stopped=false;
  	this.numbers = [{id: this.actual}];
  }

  pause(): void{
  	this.paused = true;
  }

  resume(): void{
  	this.paused = false;
  }

  stop(): void{
  	this.started=false;
  	this.paused=false;
  	this.stopped=true;
  }

  clear(): void{
  	this.numbers= [];
  	this.actual=2;
  }

  pass (): void{
  	this.actual = this.generatePrimeNumber(this.actual);
  	this.numbers= [{id: this.actual}].concat(this.numbers);
  }


  trackByFn(index, item):void {
    return index;
  }
}



