import { AppState } from '@/ngrx/app.reducer';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PulpolineCardComponent } from '@shared/components/pulpoline-card/pulpoline-card.component';

@Component({
  selector: 'app-history-layout',
  imports: [
    PulpolineCardComponent
  ],
  templateUrl: './history-layout.component.html',
  styleUrl: './history-layout.component.scss'
})
export default class HistoryLayoutComponent implements OnInit {

  private readonly _store = inject(Store<AppState>);

  public searchHistoryItems: string[] = [];

  ngOnInit(): void {
    this.getsearchElements();
  }

  private getsearchElements() {
    this._store.select('history')
      .subscribe(
        {
          next: ({ queries }) => {
            this.searchHistoryItems = queries ?? [];
          }
        }
      )
  }

}
