import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;

  public heigthPX: string = '20px';
  public backgroudColor: string = "red";

  public nome: string = "";
  public list: Array<{nome: string}> = [];

  public date: Date = new Date();

  constructor() { }

  ngOnInit(): void {

    setInterval(_ => {
      if(this.valor){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.heigthPX === '20px') {
        this.heigthPX = '50px'
        this.backgroudColor = "blue"
      } else {
        this.heigthPX = '20px'
        this.backgroudColor = "red"
      }
    }, 2000);
  }

  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }

}
