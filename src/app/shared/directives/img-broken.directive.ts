import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') handleError() {
    const native = this.host.nativeElement;
    native.src = 'img-broken.jpg';
  }
  constructor(private host: ElementRef) {}
}
