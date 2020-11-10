import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]',
})
export class RotateDirective {
  @Input() step: number;
  acc: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    console.log(e.shiftKey);
    e.shiftKey
      ? (this.acc = this.acc - Number(this.step))
      : (this.acc = this.acc + Number(this.step));

    this.el.nativeElement.style = `transform: rotate(${this.acc}deg);`;
  }
  /*   @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    console.log('shift and tab' + e.key);
    if (e.shiftKey && e.keyCode == 9) {
      console.log('shift and tab');
    }
  } */
}
