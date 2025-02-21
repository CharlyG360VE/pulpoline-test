import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'pulpoline-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './pulpoline-card.component.html',
  styleUrl: './pulpoline-card.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(200)
      ])
    ])
  ]
})
export class PulpolineCardComponent {

  @Input() title = '';
  @Input() subtitle = '';

}
