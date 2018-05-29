import { FuncionarioModule } from './funcionario/funcionario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, BemVindoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FuncionarioModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
