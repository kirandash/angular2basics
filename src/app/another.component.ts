import { Component } from '@angular/core';

import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
    <app-databinding></app-databinding>
    <h3>Lifecycle example</h3>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p>{{test}}</p>
      <p>Delete this content</p>
    </app-lifecycle>
    <button (click)="delete = !delete">Click to delete</button>
    <button (click)="test = 'text value is changed here'">Click to change content</button>
    <button (click)="boundValue = 2000">Click to change binding</button>    
  `, // ng-content is used for inserting content from another component - check app.component.html
  styles: [`
    article {
      border: 1px solid black;
    }
    p{
      color: blue;
    }
  `]
})
export class AnotherComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
