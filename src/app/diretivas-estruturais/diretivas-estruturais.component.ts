import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = 
  [
    { nome: 'William', idade: 22},
    { nome: 'Larissa', idade: 24},
    { nome: 'Raphael', idade: 1},
]

  public nome: string = 'nome';
  
  constructor() { }

  ngOnInit(): void {

    setInterval(_ => {
      if(this.condition){
        this.condition = false
      } else {
        this.condition = true;
      }
    }, 2000);

  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Maria Fernanda", idade: 31});
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }



}
