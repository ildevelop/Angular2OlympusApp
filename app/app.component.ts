import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<div>' +
              // '<login></login>' +
              '<div class="col-md-10 col-md-offset-1">' +
                  '<nav>' +
                    '<a routerLink="/forgot" class="btn btn-link" >Forgot password </a>' +
                    '<a routerLink="/login" class="btn btn-link" >Home</a>' +
                  '</nav>' +
                  '<router-outlet></router-outlet>' +
                '</div>' +
            '</div>',
})
export class AppComponent  {
  name: string ="Ilya";
}
