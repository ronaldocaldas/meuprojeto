import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
};

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, BemVindoComponent, FuncionarioCardComponent, FuncionarioFormComponent, CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: FuncionarioService, useFactory: criarFuncionarioService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
