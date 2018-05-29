import { LogService } from './log.service';

import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {
  ultimoId = 1;
  funcionarios = [{ id: 1, nome: 'Ronaldo' }];

  constructor(private logService: LogService) { }

  adicionar(nome) {
    this.logService.log('Adicionando nome ${nome}...');
    const funcionario = {
      id: ++this.ultimoId,
      nome: nome
    };
    this.funcionarios.push(funcionario);
    console.log(JSON.stringify(this.funcionarios));

  }

  consultar() {
    return this.funcionarios;
  }
}
