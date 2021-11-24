import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    let value:string = this.el.nativeElement.value

    this.el.nativeElement.value = value.toUpperCase()

  }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value
    
    if (this.format == 'lower')
      this.el.nativeElement.value = value.toLowerCase()
    else
      this.el.nativeElement.value = value.toUpperCase()
  }

}
