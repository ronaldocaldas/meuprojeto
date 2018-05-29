import { FuncionarioService } from './funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.consultar();
  }

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }
}
