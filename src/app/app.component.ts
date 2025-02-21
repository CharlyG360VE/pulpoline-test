import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerModule],
  template: `
    <ngx-spinner  size="default"
                  type="timer"
                  bdColor="rgba(0,0,0,0.5)"
                  color="#D17B6B"
                  [fullScreen]="true">
    </ngx-spinner>

    <router-outlet />
  `
})
export class AppComponent {

}
