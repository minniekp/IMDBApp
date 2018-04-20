import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  //Input variable that stores movie rating and includes background color
  @Input('appMyHighlighter') bgColor:string

  @HostListener('mouseenter') onMouseEnter() {
    switch (this.bgColor) {
      case '1':
        this.hover('Red');
        break;
      case '2':
        this.hover('Red');
        break;
      case '3':
        this.hover('orange');
        break;
      case '4':
        this.hover('Orange');
        break;
      case '5':
        this.hover('green');
          }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null);
  }

  private hover(color: string) {

    if(color !== '') {
      //mouse leave
      this.renderer.setElementStyle(this.el.nativeElement, 'border-radius', '10px');
      this.renderer.setElementStyle(this.el.nativeElement, 'box-shadow', '0px 0px 30px 30px');
      //mouse enter
  } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'border-radius', '30px');
      this.renderer.setElementStyle(this.el.nativeElement, 'box-shadow', 'none');

  }
  }
}
