import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem Vindo";

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso ")
  }

  ngOnDestroy(): void {
    console.log('Deu bom, ele foi destruído!')
  }


}
