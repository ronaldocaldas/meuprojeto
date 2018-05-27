import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {
  @Input('appCampoColorido') cor = 'gray';
  @HostBinding('style.backgroundColor') corDeFundo: String;
  @HostListener('focus') colorir() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'transparent');
    this.corDeFundo = 'transparent';
  }
}
