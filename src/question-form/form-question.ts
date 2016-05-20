import {Component, Input} from '@angular/core';
import {ControlGroup} from '@angular/common';

import {QuestionBase} from './question-base';

@Component({
  selector: 'form-question',
  templateUrl: './src/question-form/form-question.html'
})
export class FormQuestion {
  @Input() question: QuestionBase<any>;
  @Input() form: ControlGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
