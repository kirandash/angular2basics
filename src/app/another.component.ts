import { Component, OnInit } from '@angular/core';

import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
    <app-databinding></app-databinding>
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
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
