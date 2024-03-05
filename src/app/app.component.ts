import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
*/ 

@Component({
  selector: 'app-root',
  template: `
    <!-- {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir Componente</button> 
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributos</h1>
      <hr> 
    </app-diretivas-atributos>
    <app-new-component></app-new-component>
    <app-input [contador]="addValue"></app-input> <br>
    <button (click)="add()">Add</button>
    <button (click)="menos()">Deleted</button> <hr>

    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output> 
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <router-outlet></router-outlet> -->
    <app-forms></app-forms>
  `,

})
export class AppComponent implements OnInit {

  //public valor: number = 1;

  // public destruir: boolean = true

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;



  constructor() {

  }

  // public adicionar(): number {
  //   return this.valor +=1;
  // }

  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }

  public menos() {
    this.addValue -= 1;
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }

  // public destruirComponent() {
  //   this.destruir = false;
  // }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit")
  // }

  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked")
  // }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit")
  // }

  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked")
  // }

}
