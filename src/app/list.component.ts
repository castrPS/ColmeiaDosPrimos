import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
  title = 'primos';
  limit: number;
  numbers=[];

  started = false;
  paused = false;
  stopped = false;

  getPrimes(): void{
  }

  start (limit): void {
    
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


