import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{
  title = 'primos';
  numbers = [];
  actual=0;
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
  	this.actual=2;
  	this.numbers = [this.actual];
  	var interval = setInterval(()=>{
  		if(!this.stopped && !this.paused){
  			this.actual= this.generatePrimeNumber(this.actual);
  			this.numbers = [this.actual].concat(this.numbers);
  		}
  		else{
  			clearInterval(interval);
  		}
  	},500);
  }

  pause(): void{
  	this.paused = true;
  }

  resume(): void{
  	this.paused = false;
  	var interval = setInterval(()=>{
  		if(!this.stopped && !this.paused){
  			this.actual= this.generatePrimeNumber(this.actual);
  			this.numbers = [this.actual].concat(this.numbers);
  		}
  		else{
  			clearInterval(interval);
  		}
  	},1000);
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

  download(): void{
    const el = document.createElement('textarea');
    el.value = JSON.stringify(this.numbers);
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  trackByFn(index, item):void {
    return index;
  }
}



