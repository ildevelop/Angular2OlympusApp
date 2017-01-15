import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<div>' +
              // '<login></login>' +
              '<div>' +
                  '<nav>' +
                    '<a routerLink="/login" class="btn btn-link" >Home</a>' +
                    '<a routerLink="/forgot" class="btn btn-link" >Forgot password </a>' +
                      '</nav>' +
                  '<router-outlet></router-outlet>' +
                '</div>' +
            '</div>',
})
export class AppComponent  {}
