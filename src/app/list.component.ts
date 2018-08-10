import { Component } from '@angular/core';
import { ListService } from './list.service';
import { Prime } from './prime';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
  constructor(private listService: ListService) {}

  title = 'primos';
  limit: number;
  numbers=[];

  started = false;
  paused = false;
  stopped = false;

  getPrimes(): void{
  }

  start (): void {
    if (this.limit != undefined){
        this.numbers = this.listService.getPrimes(this.limit).data;
      }
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


