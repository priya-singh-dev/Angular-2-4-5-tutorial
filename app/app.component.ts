import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <ul class="nav navbar-nav">
  <li class="active"><a [routerLink] = "['/products']">Home</a></li>
  <li><a [routerLink] = "['/product/id']">Product</a></li>
  <li><a [routerLink] = "['/register1']">Register</a></li>

  </ul>
<router-outlet></router-outlet>`,
  // templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
