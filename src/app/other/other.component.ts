// ng generate component other
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other', // must be unique - make sure not to override default html tags
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
