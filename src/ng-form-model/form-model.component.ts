import {Component} from '@angular/core';
import {ControlGroup, Control, Validators} from '@angular/common';
import {validateEmail} from './validate';

@Component({
  selector: 'my-app',
  templateUrl: './src/ng-form-model/form-model.html',
})

export class MyFormComponent {

  myForm: ControlGroup;

  ngOnInit() {
    this.myForm = new ControlGroup({
      name:   new Control('', Validators.required),
      street: new Control('', Validators.minLength(3)),
      email:  new Control('', validateEmail),
      city:   new Control('', Validators.maxLength(10)),
      zip:    new Control('', Validators.pattern('[A-Za-z]{5}'))
    });
  }

  logForm(value: any) {
    console.log(value);
  }

}