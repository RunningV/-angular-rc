import {Component, Input} from '@angular/core';

@Component({
  selector: 'tooltip',
  template: `<p [hidden]="params.display">{{params.content}}</p>`,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class Tooltip {
  @Input() private params

  ngOnInit() {
    console.log(this.params)
  }

  onMouseEnter() {
    this.params.display = true;
  }

  onMouseLeave() {
    this.params.display = false;
  }
}