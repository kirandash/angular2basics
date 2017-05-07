import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element syntax, we can use # for id, . for class like css selectors
  templateUrl: './app.component.html', // or use template
  styleUrls: ['./app.component.css'] // or use styles
})
export class AppComponent {
  title = 'app works!';
}
