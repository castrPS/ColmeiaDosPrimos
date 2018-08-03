import { Component } from '@angular/core';

@Component({
  selector: '',
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

  //verifica se o numero e primo analisando até a sua raiz se possui algum divisor
  isPrime (num: number): Boolean {
    var limit=Math.sqrt(num);
    for ( var i = 2; i <= limit; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
	}

  //dado o ultimo numero gerado, gera o primo seguinte 
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
    //chama a função a cada 0,5 segundos para gerar um novo primo
  	var interval = setInterval(()=>{
  		if(!this.stopped && !this.paused){
  			this.actual= this.generatePrimeNumber(this.actual);
  			this.numbers = [this.actual].concat(this.numbers);
  		}
  		else{
  			clearInterval(interval);
  		}
  	},250);
  }

  pause(): void{
  	this.paused = true;
  }

  resume(): void{
  	this.paused = false;
    //chama a função a cada 0,5 segundos para gerar um novo primo
  	var interval = setInterval(()=>{
  		if(!this.stopped && !this.paused){
  			this.actual= this.generatePrimeNumber(this.actual);
  			this.numbers = [this.actual].concat(this.numbers);
  		}
  		else{
  			clearInterval(interval);
  		}
  	},250);
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



