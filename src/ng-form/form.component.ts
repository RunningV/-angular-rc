import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './src/ng-form/form.html',
})

export class MyFormComponent {
  logForm(value: any) {
    console.log(value);
  }
}