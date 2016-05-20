import {Component, Input} from '@angular/core';
import {ControlGroup} from '@angular/common';

import {QuestionBase} from './question-base';
import {QuestionControlService} from './question-control.service';
import {FormQuestion} from './form-question';

@Component({
  selector: 'dynamic-form',
  templateUrl: './src/question-form/dynamic-form.html',
  directives: [FormQuestion],
  providers: [QuestionControlService]
})
export class DynamicForm {
  @Input() questions: QuestionBase<any>[] = [];
  form: ControlGroup;
  playLoad = '';

  constructor(private service: QuestionControlService) {}

  ngOnInit() {
    console.log(this.questions);
    this.form = this.service.toControlGroup(this.questions);
    console.log(this.form);
  }

  onSubmit() {
    console.log(this.form.value);
    this.playLoad = JSON.stringify(this.form.value);
  }
}
