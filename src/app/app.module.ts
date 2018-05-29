import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

import { LogService } from './log.service';
import { FuncionarioService } from './funcionario.service';


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
    FuncionarioService,
    LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
