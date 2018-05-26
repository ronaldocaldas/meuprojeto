import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent{
  nome = 'Ronaldo';
  ultimoId = 0;
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();S

  adicionar(){
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
      };
      this.funcionarioAdicionado.emit(funcionario);
  }
}
