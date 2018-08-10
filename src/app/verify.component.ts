import { Component } from '@angular/core';
import { ListService } from './list.service';
import { Response } from './response';

@Component({
  selector: 'verify',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class VerifyComponent{
  constructor(private listService: ListService) {}

  title = 'primos';
  number: number;
  divi: number;
  isPrime: string;

  get = false;

  start (): void {
    this.get = false;
    if (this.number != undefined){
        this.listService.isPrime(this.number)
          .then(r => {
              this.get = true;
              this.divi = r.data[0];
              if (this.divi == this.number){
                this.isPrime = this.number + " é primo!"
              }else{
                this.isPrime = this.number + " não é primo!"
              }
            }) 
          .catch(erro => alert(erro));
      }
  }

  //atraves dessa funcao que atualiza a pagina com os numeros que vao sendo adicionados
  trackByFn(index, item):void {
    return index;
  }
}


