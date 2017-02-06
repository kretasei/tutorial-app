import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input()
  // tslint:disable-next-line:no-inferrable-types
  result: number = 0;
}
