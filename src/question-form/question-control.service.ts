import {Injectable} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {QuestionBase} from './question-base';

@Injectable()
export class QuestionControlService {
  constructor(private fb: FormBuilder) {}

  toControlGroup(questions: QuestionBase<any>[]) {
    let group = {};
    questions.forEach(q => {
      group[q.key] = q.required ?
        [q.value || '', Validators.required] :
        [q.value || ''];
    });
    console.log(group);
    // 构建表单验证选项
    return this.fb.group(group);
  }
}
