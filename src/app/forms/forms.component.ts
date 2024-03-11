import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listLanches: Array<{lanche: string, preco: string}> = [
    { lanche: "X-Bacon", preco: "10,00"},
    { lanche: "X-Salada", preco: "12,00"},
    { lanche: "X-Tudo", preco: "15,00"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    alert('Seu formulário foi encaminhado');
    console.log(form.value);
  }

}
