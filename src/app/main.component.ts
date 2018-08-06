import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{
  title = 'primos';
  numbers = [];
  sieve = [];
  actual=0;
  started = false;
  paused = false;
  stopped = false;
  sieveNumber = 0;
  constant = 100;

  //verifica se o numero e primo analisando até a sua raiz se possui algum divisor
  isPrime (num: number): Boolean {
    var limit=Math.sqrt(num);
   for (var i = 1; this.numbers[i] < limit; i++) {
        if ( num % this.numbers[i] === 0 ) {
            return false;
        }
    }
    return true;
  }

  sieveOfAtkin(init: number,limit: number): void{
   var limitSqrt = Math.sqrt(limit);
   var n;

   for (var x = 1; x <= limitSqrt; x++) {
       var xx = x*x;
       for (var y = 1; y <= limitSqrt; y++) {
           var yy = y*y;
           if (xx + yy >= limit) {
             break;
           }
           // first quadratic using m = 12 and r in R1 = {r : 1, 5}
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
               this.sieve[n] = !this.sieve[n];
           }
           // second quadratic using m = 12 and r in R2 = {r : 7}
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7)) {
               this.sieve[n] = !this.sieve[n];
           }
           // third quadratic using m = 12 and r in R3 = {r : 11}
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) {
               this.sieve[n] = !this.sieve[n];
           }
       }
   }

   // false each primes multiples
   for (n = 5; n <= limitSqrt; n++) {
       if (this.sieve[n]) {
           x = n * n;
           for (var i = x; i <= limit; i += x) {
               this.sieve[i] = false;
           }
       }
   }
}

  //dado o ultimo numero gerado, gera o primo seguinte 
  getPrimeNumber (num: number): number{
    for(var i = num+2; i > 0; i= i+2){
        if (this.sieve[i]){
            return i;
        }
    }
  }
  
  start (): void {
    this.started = true;
    this.paused = false;
    this.stopped=false;
    this.actual=3;
    this.numbers = [3,2];
    this.sieve[2] = true;
    this.sieve[3] = true;

    var interval1 = setInterval(()=>{
      if(!this.stopped && !this.paused){
        var newSieve = this.sieveNumber + this.constant;
        this.sieveOfAtkin(this.sieveNumber,newSieve);
        this.sieveNumber = newSieve;
        this.actual= this.getPrimeNumber(this.actual);
        this.numbers = [this.actual].concat(this.numbers);
      }
      else{
        clearInterval(interval1);
      }
    },50);
  }

  pause(): void{
    this.paused = true;
  }

  resume(): void{
    this.paused = false;
    //chama a função a cada 0,05 segundos para gerar um novo primo
    var interval1 = setInterval(()=>{
      if(!this.stopped && !this.paused){
        var newSieve = this.sieveNumber + this.constant;
        this.sieveOfAtkin(this.sieveNumber,newSieve);
        this.sieveNumber = newSieve;
        this.actual= this.getPrimeNumber(this.actual);
        this.numbers = [this.actual].concat(this.numbers);
      }
      else{
        clearInterval(interval1);
      }
    },50);
  }

  stop(): void{
    this.started=false;
    this.paused=false;
    this.stopped=true;
  }

  download(): void{
    //cria um elemento que não aparece no html para fazer a passagem pra area de copia
    const el = document.createElement('textarea');
    el.value = JSON.stringify(this.numbers);
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  //atraves dessa funcao que atualiza a pagina com os numeros que vao sendo adicionados
  trackByFn(index, item):void {
    return index;
  }
}



