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
      email:  new Control('',
       Validators.pattern('^[A-Za-z0-9]+\@[A-Za-z0-9]+[.][A-Za-z0-9]{2,5}')),
      city:   new Control('', Validators.maxLength(10)),
      zip:    new Control('', Validators.compose([
        Validators.pattern('[A-Za-z]{5}'),
        Validators.required
      ]))
    });
  }
  logForm(value: any) {
    console.log(this.myForm);
    console.log(value);
  }

  isValid(type): boolean {
    return this.myForm.controls[type].valid;
  }
}
