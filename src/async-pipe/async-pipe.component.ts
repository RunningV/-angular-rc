import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div>
        <h2>Angular2 AsyncPipe Example</h2>
        <p>Hello, my pretty
          <span class="badge">{{carName | async }}</span>
        </p>
        <button class="btn btn-success" (click)="clickAsync()">
          {{ isReady ? 'Previous State' : 'Resolved Promise'}}
        </button>
      </div>
  `
})
export class AsyncPipeComponent {
  private carName: Promise<string> =
    new Promise<string>(res => this.resolve = res);
  private isReady: boolean = false;
  private resolve = null;

  ngOnInit() {
    this.prevState();
  }

  prevState() {
    this.isReady = false;
    this.carName = new Promise<string>(res => this.resolve = res);
    this.resolve('Dog');
  }

  clickAsync() {
    if (this.isReady) {
      this.prevState();
    }
    else {
      this.carName = new Promise<string>(res => this.resolve = res);
      this.resolve('Cat');
      this.isReady = true;
    }
  }
}
