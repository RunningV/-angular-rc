import {Component, Directive, Input, Output, EventEmitter} from '@angular/core';
import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Tooltip} from '../components/tooltip/tooltip.component';

@Component({
  selector: 'child',
  template: `
    <div>
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" placeholder="text"
              [(ngModel)]="dataToChild.name">
          </div>
          <tooltip [params]="tooltipData"></tooltip>
        </div>

        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" placeholder="Email"
              [(ngModel)]="dataToChild.email">
          </div>
        </div>

        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" placeholder="Password"
              [(ngModel)]="dataToChild.password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"
                  [(ngModel)]="dataToChild.checke"
                  [checked]="dataToChild.checke"> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default"
              (click)="sendData(dataToChild)">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  `,
  directives: [TOOLTIP_DIRECTIVES, Tooltip]
})
class ChildComponent {
  @Input() private dataToChild;
  @Output() private dataFromChild = new EventEmitter<Object>();

  private tooltipData = {
    content: 'What are you looking for ?',
    place: 'top',
    display: true
  }
  ngOnInit() {
    console.log(this.dataToChild);
  }

  sendData(data: Object) {
    this.dataFromChild.emit(data);
  }

}


@Component({
  selector: 'my-app',
  template: `
    <div>
      <child
        [dataToChild]="parentData"
        (dataFromChild)="dataFromChild($event)"
        ></child>
    </div>
  `,
  directives: [ChildComponent]
})
export class DataFlow {
  private parentData: Object;

  ngOnInit() {
    this.parentData = {
      name: '',
      email: '',
      password: '',
      checke: false,
    }
  }

  dataFromChild(data: Object) {
    console.log(data);
  }
}