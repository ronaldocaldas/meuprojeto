import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  @Input('appCampoColorido') cor = 'gray';
  @HostBinding('style.backgroundColor') corDeFundo: String;
  @HostListener('focus') aoGanharFoco() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFoco() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'transparent');
    this.corDeFundo = 'transparent';
  }
}
