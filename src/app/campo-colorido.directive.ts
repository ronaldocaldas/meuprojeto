import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
 @HostBinding('style.backgroundColor') corDeFundo: String;

  constructor() { }

  @HostListener('focus') aoGanharFoco() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');
    this.corDeFundo = 'green';
  }

  @HostListener('blur') aoPerderFoco() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'transparent');
    this.corDeFundo = 'transparent';
  }
}
