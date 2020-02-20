import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <!--header.-->
    <app-header></app-header>
    
    <!--Router outlet-->
    <router-outlet></router-outlet>
    
    <!--footer-->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  
  constructor(){  }

}
