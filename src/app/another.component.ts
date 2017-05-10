import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
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
