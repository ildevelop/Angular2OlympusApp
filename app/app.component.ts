import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<div>' +
              // '<login></login>' +
              '<div>' +
                  '<nav>' +
                    // '<a routerLink="/login" class="btn btn-link" >Home</a>' +
                    // '<a routerLink="/forgot" class="btn btn-link" >Forgot password </a>' +

                  '<login></login>'+
                      '</nav>' +
                    // <login></login> // TODO 1 => make an login component with route inside to forgotpassss inside login component
                '</div>' +
            '</div>'+
                  '<router-outlet></router-outlet>'//home + login buttons TODO main login with forgot password

})
export class AppComponent  {}
