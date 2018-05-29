import { Component } from '@angular/core';

const newLocal = 'hello';
@Component({
  selector: newLocal,
  template: `
        <h2>
            Hello {{nome}}
        </h2>
    `
})
export class HelloComponent {
  nome = 'Ronaldo';

}
