import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element syntax, we can use # for id, . for class like css selectors
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
