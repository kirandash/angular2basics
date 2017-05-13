import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{result}}
  `,
  styles: [],
  inputs: ['result']
})
export class PropertyBindingComponent {
  //@Input() result: number = 0; // By adding @Input, this property can also be set outside of the bound of this component - from databinding,component.html
  result: number = 0; // not recommended
}
