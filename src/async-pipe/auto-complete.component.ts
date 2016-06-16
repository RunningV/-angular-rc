import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
      <h3>Angular2 AutoComplete</h3>
      <h4>The Selected Car: {{selectedCar}}</h4>
      <input [(ngModel)]="selectedCar"
             [autoComplete]="cars"
             [autoCompleteOnSelect]="autoCompleteOnSelect($event)"
             [autoComponentOptionField]="'name'"
             class="form-control">
      <h3>Asynchronous results</h3>
      <h4>Model: {{asyncSelectedCar}}</h4>
      <input [(ngModel)]="asyncSelectedCar"
             [autoComplete]="getAsyncData(getCurrentContest())"
             [autoCompleteOptionsLimit]="7"
             (autoCompleteLoading)="changeAutoCompleteLoading()">
             (autoCompleteNoResults)="chageAutoCompleteNoResults()"
             (autoCompleteOnSelect)="changeAutoCompleteOnSelect()"
             class="form-control">
      <div [hidden]="autoCompleteNoResults!==true">
        <span class="glyphicon glyphicon-remove"></span> Empty Query
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AuttoCompleteComponent {
  private selectedCar: string = '';
  private asyncSelectedCar: string = '';
  private autoCompleteLoading: boolean = false;
  private autoCompleteNoResults: boolean = false;
  private carsOne: string[] = ['BMW', 'Audi', 'Mercedes', 'Porsche',
    'Volkswagen', 'Opel', 'Maserati', 'Volkswagen', 'BMW Serie 1',
    'BMW Serie 2'];
  private carsTwo: any[] = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Audi' },
    { id: 3, name: 'Mercedes' },
    { id: 4, name: 'Porsche' },
    { id: 5, name: 'Volkswagen' },
    { id: 6, name: 'Opel' },
    { id: 7, name: 'Maserati' },
    { id: 8, name: 'Volkswagen' },
    { id: 9, name: 'BMW Serie 1' },
    { id: 10, name: 'BMW Serie 2' }
  ];

  private getCurrentContext() {
    console.log(this);
    return this;
  }

  private cachedResult: any;
  private previousContext: any;

  private getAsyncData(context: any) {
    if(this.previousContext === context) {
      return this.cachedResult;
    }

    this.previousContext = context;
    let form = function() {
      let p = new Promise((resolve: Function) => {
        setTimeout(() => {
          let query = new RegExp(context.asyncSelectedCar, 'ig');
          return resolve(context.carsExample1.filter((state: any) => {
            return query.test(state);
          }));
        }, 500);
      });
      return p;
    };
    this.cachedResult = form;
    return this.cachedResult;
  }

  private changeAutoComplete(e: boolean) {
    this.autoCompleteLoading = e;
  }

  private changeAutoCompleteLoading(e: boolean) {
    this.autoCompleteLoading = e;
  }

  private changeAutoCompleteNoResults(e: boolean) {
    this.autoCompleteNoResults = e;
  }

  private autoCOmpleteOnSelect(e: any) {
    console.log(e.item);
  }

}