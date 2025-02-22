import { AppState } from '@/ngrx/app.reducer';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PulpolineCardComponent } from '@shared/components/pulpoline-card/pulpoline-card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-layout',
  imports: [
    PulpolineCardComponent
  ],
  templateUrl: './history-layout.component.html',
  styleUrl: './history-layout.component.scss'
})
export default class HistoryLayoutComponent implements OnInit, OnDestroy {

  private readonly _store = inject(Store<AppState>);
  private readonly _subscription$ = new Subscription();

  public searchHistoryItems: string[] = [];

  ngOnInit(): void {
    this.getsearchElements();
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

  private getsearchElements() {
    this._subscription$.add(
      this._store.select('history')
        .subscribe(
          {
            next: ({ queries }) => {
              this.searchHistoryItems = queries ?? [];
            }
          }
        )
    );
  }

}
