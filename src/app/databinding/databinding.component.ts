import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
	stringInterpolation = 'This is a test string for string interpolation data binding!';
	numberInterpolation = 20;

	onTest(){
		return true;
	}

	onClicked(value: string){
		alert(value);
	}
}
