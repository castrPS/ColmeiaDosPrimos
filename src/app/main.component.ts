import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{
  title = 'primos';
  sieveNumber: number;
  constant: number;
  numbers=[];

  started = false;
  paused = false;
  stopped = false;

  sieveOfAtkin(init: number,limit: number): boolean[]{
   var results = [];
   var sieve = new Array(limit+1);
  
   for(var i = 0; i < sieve.length; i++){
    sieve[i] = 0;
   }

   var factor = Math.floor(Math.sqrt(limit))+1;
   var n,i,j;
  
   for(i = 1; i < factor; i++){
    for(j = 1; j < factor; j++){
      n = 4 * (Math.pow(i,2)) + (Math.pow(j,2));
      
      if((n <= limit) && ((n % 12 === 1) || (n % 12 === 5))){
        sieve[n] = sieve[n] ^ 1;
      }
      
      n = 3 * (Math.pow(i,2)) + (Math.pow(j,2));
      
      if((n <= limit) && (n % 12 === 7)){
        sieve[n] = sieve[n] ^ 1;
      }
      
      if(i > j){
        n = 3 * (Math.pow(i,2)) - (Math.pow(j,2));
        
        if((n <= limit) && (n % 12 === 11)){
          sieve[n] = sieve[n] ^ 1;
        }
      }
     } 
   }
  
  for(i = init; i < factor; i++){
    if(sieve[i] === 1){
      for(j = (Math.pow(i,2)); j < limit; j += Math.pow(i,2)){
        sieve[j] = 0;
      }
    }
  }
  
  // If the number is prime, push to the results array
  for(i = init; i < limit; i++){
    if(sieve[i] ===1){
      this.numbers= [i].concat(this.numbers);
    }
  }
  
  return results;
}

  //dado o ultimo numero gerado, gera o primo seguinte 
  getPrimeNumber (num: number): number{
    for(var i = num+2; i > 0; i= i+2){
        if (this.numbers[i]){
            return i;
        }
    }
  }
  
  start (): void {
    this.started = true;
    this.paused = false;
    this.stopped=false;
    this.numbers=[3,2];
    this.sieveNumber = 0;
    this.constant = 100;

    var interval1 = setInterval(()=>{
      if(!this.stopped && !this.paused){
        var newSieve = this.sieveNumber + this.constant;
        this.sieveOfAtkin(this.sieveNumber,newSieve);
        this.sieveNumber = newSieve;
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



