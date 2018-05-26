import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Ronaldo';
  adicionado = false;

  adicionar(){
  this.nome = `Adicionado ${this.nome}`;
  this.adicionado = true;
  }
}